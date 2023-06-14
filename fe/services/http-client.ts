type LoadingSetter = ((status: boolean) => void) | null

interface RequestOptions extends Omit<RequestInit, 'body'> {
    body?: object | RequestInit['body']
}

export function call<T>(url: string, options?: RequestOptions, setLoader?: LoadingSetter): Promise<T | Error> {
    setLoader?.(true)
    const abortController = new AbortController()

    options = {
        ...options,
        signal: abortController.signal,
    }

    if (options.body && typeof options.body !== 'string') {
        options.body = JSON.stringify(options.body)
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json',
        }
    }

    const patched = httpClient.beforeRequest?.(url, options)
    if (patched) {
        if (patched.resolve) return Promise.resolve(patched.resolve as T)
        if (patched.reject) return Promise.reject(patched.reject)
        if (patched.url) url = patched.url
        if (patched.options) options = patched.options
    }

    const promise = fetch(`/api/${url}`, options as RequestInit)
        .then((response) => {
            setLoader?.(false)

            if (!response.ok) return Promise.reject(response)

            return response.json() as T
        })
        .catch((error: Error | Response) => {
            if (error instanceof Response) {
                error = new Error(`errors.${error.status}`)
            }

            if (error.name === 'AbortError') return error
            if (typeof httpClient.onError === 'function') {
                httpClient.onError(error)
                return error
            }

            // if error was not handled, re-throw it
            throw error
        })

    // @ts-ignore
    promise.abort = () => {
        abortController.abort()
        setLoader?.(false)
    }

    return promise
}

const httpClient = {
    get<T>(url: string, setLoader?: LoadingSetter, options: RequestOptions = {}): ReturnType<typeof call<T>> {
        return call(url, { ...options, method: 'GET' }, setLoader)
    },

    post<T>(url: string, body: object, setLoader?: LoadingSetter, options: RequestOptions = {}): ReturnType<typeof call<T>> {
        return call(url, { ...options, method: 'POST', body }, setLoader)
    },

    put<T>(url: string, body: object, setLoader?: LoadingSetter, options: RequestOptions = {}): ReturnType<typeof call<T>> {
        return call(url, { ...options, method: 'PUT', body }, setLoader)
    },

    patch<T>(url: string, body: object, setLoader?: LoadingSetter, options: RequestOptions = {}): ReturnType<typeof call<T>> {
        return call(url, { ...options, method: 'PATCH', body }, setLoader)
    },

    delete<T = null>(url: string, setLoader?: LoadingSetter, options: RequestOptions = {}): ReturnType<typeof call<T>> {
        return call(url, { ...options, method: 'DELETE' }, setLoader)
    },

    head<T = null>(url: string, setLoader?: LoadingSetter, options: RequestOptions = {}): ReturnType<typeof call<T>> {
        return call(url, { ...options, method: 'HEAD' }, setLoader)
    },

    onError: null as null | ((error: Error) => void),
    beforeRequest: null as null | ((url: string, options: RequestOptions) => void | {url?: string, options?: RequestOptions, resolve?: unknown, reject?: unknown}),
}

export default httpClient

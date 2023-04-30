type LoadingSetter = ((status: boolean) => void) | null

interface RequestOptions extends Omit<RequestInit, 'body'> {
    body?: object | RequestInit['body']
}

export function call<T>(url: string, options?: RequestOptions, setLoader?: LoadingSetter): Promise<T> {
    setLoader?.(true)
    const abortController = new AbortController()

    options = {
        ...options,
        signal: abortController.signal,
    }

    if (options?.body && typeof options.body !== 'string') {
        options.body = JSON.stringify(options.body)
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json',
        }
    }

    const promise = fetch(`/api/${url}`, options as RequestInit)
        .then((response) => {
            if (!response.ok) {
                setLoader?.(false)
                throw new Error(response.statusText)
            }

            return response.json() as T
        })
        .then((data) => {
            setLoader?.(false)
            return data
        })
        .catch((error: Error) => {
            // externalErrorLogging.error(error) /* <-- made up logging service */
            throw error /* <-- rethrow the error so consumer can still catch it */
        })

    // @ts-ignore
    promise.abort = () => {
        abortController.abort()
        setLoader?.(false)
    }

    return promise
}

const httpClient = {
    get<T>(url: string, setLoader?: LoadingSetter, options: RequestOptions = {}): Promise<T> {
        return call(url, { ...options, method: 'GET' }, setLoader)
    },

    post<T>(url: string, body: object, setLoader?: LoadingSetter, options: RequestOptions = {}): Promise<T> {
        return call(url, { ...options, method: 'POST', body }, setLoader)
    },

    put<T>(url: string, body: object, setLoader?: LoadingSetter, options: RequestOptions = {}): Promise<T> {
        return call(url, { ...options, method: 'PUT', body }, setLoader)
    },

    patch<T>(url: string, body: object, setLoader?: LoadingSetter, options: RequestOptions = {}): Promise<T> {
        return call(url, { ...options, method: 'PATCH', body }, setLoader)
    },

    delete<T = null>(url: string, setLoader?: LoadingSetter, options: RequestOptions = {}): Promise<T> {
        return call(url, { ...options, method: 'DELETE' }, setLoader)
    },

    head<T = null>(url: string, setLoader?: LoadingSetter, options: RequestOptions = {}): Promise<T> {
        return call(url, { ...options, method: 'HEAD' }, setLoader)
    },
}

export default httpClient

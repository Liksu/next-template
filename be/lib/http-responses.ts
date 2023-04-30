import { NextApiResponse } from 'next'
import { HTTPMethod } from '@/interfaces/primitive'

export function notFound(res: NextApiResponse): null {
    res.status(404).end(JSON.stringify({ message: 'Not found' }))
    return null
}

export function forbidden(res: NextApiResponse): null {
    res.status(403).end(JSON.stringify({ message: 'You do not have permission to access this resource' }))
    return null
}

export function notAllowed(res: NextApiResponse, allowed: Array<HTTPMethod> = []): null {
    res.status(405)
        .setHeader('Allow', allowed.join(', '))
        .end(JSON.stringify({ message: 'Method not allowed' }))
    return null
}

export function badRequest(res: NextApiResponse, message: string): null {
    res.status(400).end(JSON.stringify({ message }))
    return null
}

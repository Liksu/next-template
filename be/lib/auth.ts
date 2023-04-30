import { getServerSession } from 'next-auth'
import { notAllowed, notFound } from './http-responses'
import authOptions from '@/constants/auth-options'
import { ApiRestrict, ApiRestrictor } from '@/interfaces/auth'
import { UserInfo } from '@/interfaces/user'
import { HTTPMethod } from '@/interfaces/primitive'

export const restrictor: ApiRestrictor = async (req, res, context) => {
    const session = await getServerSession(req, res, authOptions)

    if (!session) return notFound(res)

    const user = session.user as UserInfo
    if (!user || user.banned) return notFound(res)

    if (context.method) {
        const methods = Array.isArray(context.method) ? context.method : [context.method]
        const allowed = methods.map((method) => method.toUpperCase()) as Array<HTTPMethod>
        const reqMethod = req.method?.toUpperCase() as HTTPMethod
        if (!reqMethod || !allowed.includes(reqMethod)) return notAllowed(res, allowed)
    }

    return session
}

export const createRestriction: ApiRestrict = (context) => {
    return (cb) => {
        return async (req, res) => {
            const session = await restrictor(req, res, context)

            if (!session) return null

            const result = await cb(req, res, session)
            return result
        }
    }
}

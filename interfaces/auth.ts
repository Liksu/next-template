import { NextApiRequest, NextApiResponse } from 'next'
import { Session } from 'next-auth'
import { NextApiHandler } from 'next/dist/shared/lib/utils'
import { HTTPMethod } from './primitive'

export interface ApiRestrictionContext {
    method?: HTTPMethod | Array<HTTPMethod>
}

export type ApiRestrictor = (
    req: NextApiRequest,
    res: NextApiResponse,
    context: ApiRestrictionContext
) => Promise<Session | null>

export type ApiRestrict = (
    context: ApiRestrictionContext
) => <T = unknown>(
    handler: (req: NextApiRequest, res: NextApiResponse<T>, session: Session) => unknown | Promise<unknown>
) => NextApiHandler<T>

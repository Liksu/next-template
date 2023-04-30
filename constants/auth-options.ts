import getConfig from 'next/config'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import { dbClientPromise } from '@/be/lib/mongodb'
import { UserInfo } from '@/interfaces/user'

import GoogleProvider from 'next-auth/providers/google'

const {
    nextAuthSecret,
    googleId, googleSecret,
} = getConfig().serverRuntimeConfig

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: googleId,
            clientSecret: googleSecret,
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                    locale: profile.locale,
                    banned: false,
                } as UserInfo
            },
        }),
    ],
    debug: false,
    secret: nextAuthSecret,
    adapter: MongoDBAdapter(dbClientPromise),
}

export default authOptions

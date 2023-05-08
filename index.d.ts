declare module 'next/config' {
    export default function getConfig(): {
        publicRuntimeConfig: {
            [key: string]: string | number | boolean
        }
        serverRuntimeConfig: {
            mongoURI: string
            mongoDB: string
            nextAuthURL: string
            nextAuthSecret: string
            googleAnalyticsId: string
            googleId: string
            googleSecret: string
        }
    }
}

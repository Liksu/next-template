import { AppProps } from 'next/app'
import Head from 'next/head'
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { useLocalStorage } from '@mantine/hooks'
import { RouterTransition } from '@/components/service/router-transition'
import { SessionProvider, SessionProviderProps } from 'next-auth/react'
import Shell from '@/components/layout/shell'
import { appWithTranslation } from 'next-i18next'
import { ModalsProvider } from '@mantine/modals'
import getConfig from 'next/config'
import ReactGA from 'react-ga4'

const { googleAnalyticsId } = getConfig().serverRuntimeConfig

function App(props: AppProps & SessionProviderProps) {
    const { Component, pageProps } = props

    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
        getInitialValueInEffect: true,
    })

    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

    if (googleAnalyticsId) {
        ReactGA.initialize(googleAnalyticsId)
    }
    
    return (<>
        <Head>
            <title>Page title</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>

        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{ colorScheme }}
            >
                <RouterTransition />

                <SessionProvider session={props.session}>
                    <Notifications />
                    <ModalsProvider>
                        <Shell>
                            <Component {...pageProps} />
                        </Shell>
                    </ModalsProvider>
                </SessionProvider>
            </MantineProvider>
        </ColorSchemeProvider>
    </>)
}

export default appWithTranslation(App)

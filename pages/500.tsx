import { useTranslation } from 'next-i18next'
import { Title } from '@mantine/core'
import Head from 'next/head'

export default function Custom500(): JSX.Element {
    const { t } = useTranslation('common')
    return (
        <>
            <Head>
                <title>{t('pages.500.title')} - PBorsh</title>
            </Head>
            <Title align="center" mt="xl">
                {t('pages.500.text')}
            </Title>
        </>
    )
}

export { getTranslations as getStaticProps } from '@/be/services/get-translations'

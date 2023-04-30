import { Button, Container, createStyles, Group, Text, Title } from '@mantine/core'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import Link from 'next/link'
import { ReactElement } from 'react'

const SPACING = 1.5
const DARK = 4
const LIGHT = 2
const useStyles = createStyles((theme) => ({
    root: {
        paddingTop: 80,
        paddingBottom: 80,
    },

    label: {
        textAlign: 'center',
        fontWeight: 900,
        fontSize: 220,
        lineHeight: 1,
        marginBottom: parseFloat(theme.spacing.xl) * SPACING,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[DARK] : theme.colors.gray[LIGHT],

        [theme.fn.smallerThan('sm')]: {
            fontSize: 120,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily ?? ''}`,
        textAlign: 'center',
        fontWeight: 900,
        fontSize: 38,

        [theme.fn.smallerThan('sm')]: {
            fontSize: 32,
        },
    },

    description: {
        maxWidth: 500,
        margin: 'auto',
        marginTop: theme.spacing.xl,
        marginBottom: parseFloat(theme.spacing.xl) * SPACING,
    },
}))

export default function Custom404(): ReactElement {
    const { classes } = useStyles()
    const { t } = useTranslation('common')

    return (
        <>
            <Head>
                <title>{`${t('pages.404.title')}`}</title>
            </Head>
            <Container className={classes.root}>
                <div className={classes.label}>404</div>
                <Title className={classes.title}>{t('pages.404.secret')}</Title>
                <Text color="dimmed" size="lg" align="center" className={classes.description}>
                    {t('pages.404.text')}
                </Text>
                <Group position="center">
                    <Link href="/" passHref>
                        <Button variant="subtle" size="md">
                            {t('pages.404.home')}
                        </Button>
                    </Link>
                </Group>
            </Container>
        </>
    )
}

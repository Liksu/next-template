import { PropsWithChildren, ReactElement } from 'react'
import { AppShell, CSSObject } from '@mantine/core'
import SiteFooter from '@/components/layout/footer'
import SiteHeader from '@/components/layout/header'
import { MenuList } from '@/interfaces/globals'
import LeftPanel from '@/components/layout/left-panel'
import RightPanel from '@/components/layout/right-panel'

interface ShellProps extends PropsWithChildren {
    secondaryMenu?: MenuList
}

export default function Shell({ children, secondaryMenu }: ShellProps): ReactElement {
    const leftPanel = secondaryMenu?.length ? <LeftPanel menu={secondaryMenu ?? []} /> : undefined
    const rightPanel = false ? <RightPanel /> : undefined
    const header = <SiteHeader />
    const footer = <SiteFooter />

    return (
        <AppShell
            fixed={false}
            padding="md"
            header={header}
            navbar={leftPanel}
            aside={rightPanel}
            footer={footer}
            styles={(theme) => ({
                body: {
                    minHeight: 'calc(100vh - var(--mantine-header-height) - var(--mantine-footer-height))',
                },
                main: {
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.white,
                } as CSSObject,
            })}
        >
            {children}
        </AppShell>
    )
}

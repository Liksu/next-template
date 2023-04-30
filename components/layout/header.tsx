import { ReactElement } from 'react'
import { Burger, Center, Container, Group, Header, Menu, Paper, Transition } from '@mantine/core'
import { HEADER_HEIGHT } from '@/constants/main'
import Logo from '@/components/layout/logo'
import useStyles from './header.styles'
import { useDisclosure } from '@mantine/hooks'
import { UserMenu } from '@/components/user/user-menu'
import { useTranslation } from 'next-i18next'
import HeaderMenu from '@/constants/header-menu-items'
import { IconChevronDown } from '@tabler/icons-react'
import ALink from '@/components/service/a-link'
import { useSession } from 'next-auth/react'
import { MenuItem } from '@/interfaces/globals'

export default function SiteHeader(): ReactElement {
    const { classes } = useStyles()
    const [opened, { toggle, close }] = useDisclosure(false)
    const { t } = useTranslation('common')

    const { data } = useSession()
    const loggedIn = data?.user ? () => true : (menuItem: MenuItem) => !menuItem.protected

    const links = HeaderMenu(t)

    const items = links.filter(loggedIn).map((menuItem, index) => {
        const menuItems = menuItem.children?.filter(loggedIn).map((child, index) => (
            <ALink key={index} item={child} />
        ))

        if (menuItems) {
            return (
                <Menu key={menuItem.label} trigger="hover">
                    <Menu.Target>
                        <ALink item={menuItem}>
                            <Center>
                                <span className={classes.linkLabel}>{menuItem.label}</span>
                                <IconChevronDown size={12} stroke={1.5} />
                            </Center>
                        </ALink>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            )
        }

        return (
            <ALink onClick={close} key={index} item={menuItem} />
        )
    })


    return (<Header height={HEADER_HEIGHT} withBorder>
        <Container className={classes.inner} fluid>
            <Group>
                <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
                <Logo />
                <Transition transition="pop-top-right" duration={200} mounted={opened}>
                    {(styles) => (
                        <Paper className={classes.dropdown} withBorder style={styles}>
                            {items}
                        </Paper>
                    )}
                </Transition>
            </Group>
            <Group spacing={5} className={classes.links}>
                {items}
            </Group>
            <UserMenu />
        </Container>

    </Header>)
}

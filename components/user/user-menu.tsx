import { ReactElement } from 'react'
import { useSession } from 'next-auth/react'
import { ActionIcon, Group, Menu } from '@mantine/core'
import { useTranslation } from 'next-i18next'
import { UserInfo } from '@/interfaces/user'
import UserAvatar from '@/components/user/user-avatar'
import ColorSchemeToggleMenu from '@/components/service/color-scheme-toggle-menu'
import UserInfoMenu from '@/components/user/user-personal-menu'

export function UserMenu(): ReactElement {
    const { t } = useTranslation('common')
    const session = useSession()
    const user = session?.data?.user as UserInfo

    return (
        <Group position="center">
            <Menu withArrow width={300} position="bottom">
                <Menu.Target>
                    <ActionIcon>
                        <UserAvatar user={user} />
                    </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>
                    <UserInfoMenu />
                    <Menu.Divider />
                    <ColorSchemeToggleMenu />
                </Menu.Dropdown>
            </Menu>
        </Group>
    )
}

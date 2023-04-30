import { Container, Menu } from '@mantine/core'
import { useTranslation } from 'next-i18next'
import { signOut, useSession } from 'next-auth/react'
import { IconLogin, IconLogout } from '@tabler/icons-react'
import { openModal } from '@mantine/modals'
import { UserInfo } from '@/interfaces/user'
import UserSinginForm from '@/components/user/user-singin-form'
import UserBlock from '@/components/user/user-block'

export default function UserInfoMenu(): JSX.Element {
    const { t } = useTranslation('common')
    const session = useSession()
    const user = session?.data?.user as UserInfo

    function openLogin(): void {
        console.log('openLogin')
        openModal({
            title: t('user-menu.sing-in-modal.title'),
            children: <UserSinginForm />,
        })
    }

    if (!user) {
        return (
            <Menu.Item onClick={openLogin} icon={<IconLogin size={14} stroke={1.5} />}>
                {t('user-menu.sign-in')}
            </Menu.Item>
        )
    }

    return (
        <>
            <Container p="sm">
                <UserBlock user={user} />
            </Container>
            <Menu.Item onClick={() => signOut()} icon={<IconLogout size={14} stroke={1.5} />}>
                {t('user-menu.log-out')}
            </Menu.Item>
        </>
    )
}

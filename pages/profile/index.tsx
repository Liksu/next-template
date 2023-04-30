import { ReactElement } from 'react'
import { Center, Loader, Text } from '@mantine/core'
import UserBlock from '@/components/user/user-block'
import { useSession } from 'next-auth/react'
import Custom404 from '@/components/layout/custom-404'
import { UserInfo } from '@/interfaces/user'

export default function ProfileIndexPage(): ReactElement {
    const session = useSession()
    if (session.status === 'loading') {
        return <Center><Loader /></Center>
    }

    const user = session?.data?.user as UserInfo
    if (!user) {
        return <Custom404 />
    }
    
    return (<>
        <Text size="xl" align="center">Here is the profile protected content</Text>
        <Center>
            <UserBlock user={user} />
        </Center>
    </>)
}

export { getTranslations as getStaticProps } from '@/be/services/get-translations'

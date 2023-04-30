import { SimpleGrid, Text } from '@mantine/core'
import { FC } from 'react'
import { signIn } from 'next-auth/react'
import { useTranslation } from 'next-i18next'
import { GoogleButton } from '../social/google-button'
import { FacebookButton } from '../social/facebook-button'
import { TwitterButton } from '../social/twitter-button'
import { MicrosoftButton } from '../social/microsoft-button'

const UserSinginForm: FC = () => {
    const { t } = useTranslation('common')
    console.log('UserSinginForm')

    return (
        <>
            <Text size="lg" weight={500}>
                {t('user-menu.sing-in-modal.message')}
            </Text>

            <SimpleGrid cols={2} mb="md" mt="md">
                <GoogleButton onClick={() => signIn('google')}>Google</GoogleButton>
                <MicrosoftButton disabled>Microsoft</MicrosoftButton>
                <TwitterButton disabled>Twitter</TwitterButton>
                <FacebookButton disabled>Facebook</FacebookButton>
            </SimpleGrid>
        </>
    )
}

export default UserSinginForm

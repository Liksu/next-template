import { Button, ButtonProps } from '@mantine/core'
import { GoogleIcon } from './google-icon'

export function GoogleButton(props: ButtonProps & { onClick?: () => void }): JSX.Element {
    return <Button leftIcon={<GoogleIcon />} variant="default" color="gray" {...props} />
}

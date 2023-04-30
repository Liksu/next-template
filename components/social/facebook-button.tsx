import { Button, ButtonProps } from '@mantine/core'
import { FacebookIcon } from './facebook-icon'

export function FacebookButton(props: ButtonProps & { onClick?: () => void }): JSX.Element {
    return <Button leftIcon={<FacebookIcon />} variant="default" color="gray" {...props} />
}

import { Button, ButtonProps } from '@mantine/core'
import { TwitterIcon } from './twitter-icon'

export function TwitterButton(props: ButtonProps & { onClick?: () => void }): JSX.Element {
    return <Button leftIcon={<TwitterIcon size={16} color="#00ACEE" />} variant="default" {...props} />
}

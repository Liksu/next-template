import { Button, ButtonProps } from '@mantine/core'
import { MicrosoftIcon } from './microsoft-icon'

export function MicrosoftButton(props: ButtonProps & { onClick?: () => void }): JSX.Element {
    return <Button leftIcon={<MicrosoftIcon size={16} color="#00ACEE" />} variant="default" {...props} />
}

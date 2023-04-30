import { Button, ButtonProps } from '@mantine/core'
import { GithubIcon } from './github-icon'

export function GithubButton(props: ButtonProps & { onClick?: () => void }): JSX.Element {
    return <Button {...props} leftIcon={<GithubIcon size={16} />} variant="default" color="gray" />
}

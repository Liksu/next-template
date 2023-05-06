import { forwardRef, ForwardRefExoticComponent, PropsWithChildren } from 'react'
import { MenuItem } from '@/interfaces/globals'
import { Anchor, createStyles } from '@mantine/core'
import Link from 'next/link'

interface ALinkProps extends PropsWithChildren {
    item?: MenuItem
    href?: string
    component?: ForwardRefExoticComponent<any>

    [key: string]: unknown
}

const useStyles = createStyles((theme) => ({
    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },

}))

const ALink = forwardRef<HTMLAnchorElement, ALinkProps>(({ item, href, children, component, ...props }, passedRef) => {
    const { classes } = useStyles()

    const link = href ?? item?.link
    const content = children ?? item?.label ?? ''
    const title = item?.description ?? undefined

    if (!link) return <Anchor title={title} {...props} className={classes.link} ref={passedRef}>{content}</Anchor>

    return (
        <Anchor
            title={title}
            {...props}
            href={link}
            className={classes.link}
            component={component ?? Link}
            ref={passedRef}
        >
            {content}
        </Anchor>
    )
})
ALink.displayName = 'ALink'

export default ALink

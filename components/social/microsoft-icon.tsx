import React from 'react'
import { DEFAULT_SOCIAL_ICON_SIZE } from '@/constants/main'

interface MicrosoftIconProps extends React.ComponentPropsWithoutRef<'svg'> {
    size?: number
}

export function MicrosoftIcon({ size, ...other }: MicrosoftIconProps): JSX.Element {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size ?? DEFAULT_SOCIAL_ICON_SIZE}
            height={size ?? DEFAULT_SOCIAL_ICON_SIZE}
            viewBox="0 0 21 21"
            {...other}
        >
            <rect x="1" y="1" width="9" height="9" fill="#f25022" />
            <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
            <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
            <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
        </svg>
    )
}

import { Menu, useMantineColorScheme } from '@mantine/core'
import { IconMoonStars, IconSun } from '@tabler/icons-react'
import { useTranslation } from 'next-i18next'
import { ReactElement } from 'react'

export default function ColorSchemeToggleMenu(): ReactElement {
    const { t } = useTranslation()
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    const dark = colorScheme === 'dark'
    const color = dark ? 'yellow' : 'blue'
    const icon = dark ? <IconSun size={14} color={color} /> : <IconMoonStars size={14} color={color} />

    return (
        <Menu.Item icon={icon} onClick={() => toggleColorScheme()}>
            {t(`switch-to.${dark ? 'light' : 'dark'}`)}
        </Menu.Item>
    )
}

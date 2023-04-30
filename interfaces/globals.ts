export type Locale = string
export type Locales = Array<Locale>

export interface MenuItem {
    link?: string
    label: string | null
    icon?: string
    description?: string | null
    children?: MenuList
    childrenCount?: number
    protected?: boolean
    canBeActive?: boolean
}

export type MenuList = Array<MenuItem>

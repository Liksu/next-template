import { ReactElement } from 'react'
import { Aside, ScrollArea } from '@mantine/core'

interface RightPanelProps {
}

export default function RightPanel({}: RightPanelProps): ReactElement {
    return <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, md: 300 }} fixed>
        <ScrollArea offsetScrollbars scrollHideDelay={700}>
        </ScrollArea>
    </Aside>
}

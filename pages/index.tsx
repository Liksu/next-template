import { ReactElement } from 'react'
import { Text } from '@mantine/core'

export default function HomePage(): ReactElement {
    return (<>
        <Text size="xl" align="center">Hey there!</Text>
    </>)
}

export {getTranslations as getStaticProps} from '@/be/services/get-translations'

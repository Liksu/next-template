import { ReactElement } from 'react'
import { Text } from '@mantine/core'
import {Locale} from "@/interfaces/globals";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export default function HomePage(): ReactElement {
    return (<>
        <Text size="xl" align="center">Hey there!</Text>
    </>)
}

export {getTranslations as getStaticProps} from '@/be/services/get-translations'

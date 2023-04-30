import {Locale} from "@/interfaces/globals";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export async function getTranslations({ locale }: { locale: Locale }): Promise<{ props: unknown }> {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    }
}
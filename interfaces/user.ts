import {Locale} from "@/interfaces/globals";
import {User} from "next-auth";

export type UserId = string

export interface UserInfo extends User {
    id: UserId
    locale?: Locale
    banned?: boolean
}
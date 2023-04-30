import { ReactElement } from 'react'
import {UserInfo} from "@/interfaces/user";
import {Avatar} from "@mantine/core";

interface UserAvatarProps {
    user: UserInfo
}

export default function UserAvatar({ user }: UserAvatarProps): ReactElement {
    return <Avatar src={user?.image ?? null} radius="xl" imageProps={{ referrerPolicy: 'no-referrer' }} />
}

import { Group, Text } from '@mantine/core'
import { User } from 'next-auth'
import UserAvatar from './user-avatar'
import { UserInfo } from '@/interfaces/user'
import { ReactElement } from 'react'

interface UserBlockProps {
    user: UserInfo | User
    hideLevel?: boolean
}

export default function UserBlock({ user, hideLevel, ...props }: UserBlockProps): ReactElement {
    return (
        <Group {...props} style={{ minWidth: 'max-content' }}>
            <UserAvatar user={user} />

            <div>
                <Text weight={500}>{user.name}</Text>
                <Text size="xs" color="dimmed" sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
                    {user.email}
                </Text>
            </div>
        </Group>
    )
}

import { MenuList } from '@/interfaces/globals'

export default (t: (key: string) => string): MenuList => [
    {
        link: '/mdx-test',
        label: t('main-menu.mdx.title'),
    },
    {
        link: '/profile',
        label: t('main-menu.profile.title'),
        protected: true,
    },
    {
        label: 'Parts',
        description: 'Parts of the template',
        children: [
            {
                link: 'https://nextjs.org/',
                label: 'Next.js',
            },
            {
                link: 'https://mantine.dev/',
                label: 'Mantine',
            },
            {
                link: 'https://next.i18next.com/',
                label: 'i18next',
            },
            {
                link: 'https://pm2.keymetrics.io/',
                label: 'PM2',
            },
            {
                link: 'https://next-auth.js.org/',
                label: 'NextAuth.js',
            },
            {
                link: 'https://nextjs.org/docs/advanced-features/using-mdx',
                label: 'MDX',
            },
            {
                link: 'https://www.mongodb.com/',
                label: 'MongoDB',
            },
            {
                link: 'https://www.npmjs.com/package/react-ga4',
                label: 'React GA4',
            }
        ],
    },
]

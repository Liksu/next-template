# next.js Application Template

Next.js application template with predefined libraries and configurations.

## Contains predefined libraries and configurations:
- [x] [Next.js](https://nextjs.org/) is a React framework that provides infrastructure and simple development experience for server side rendered (SSR) and statically exported applications. Currently no `/app` folder support provided.
- [x] [Mantine](https://mantine.dev/) - React components and hooks library with native TypeScript support and without external dependencies. In the template included:
  - core
  - dates
  - form
  - modals
  - notifications
- [x] [next-i18next](https://next.i18next.com/) - internationalization framework for Next.js.
- [x] [NextAuth.js](https://next-auth.js.org/) - authentication library for Next.js applications.
- [x] [MongoDB](https://www.mongodb.com/) - NoSQL database.
- [x] [MDX](https://mdxjs.com/) - included support for MDX files.
- [x] [PM2](https://pm2.keymetrics.io/) - process manager for Node.js applications.
- [x] [React GA4](https://www.npmjs.com/package/react-ga4) - Google Analytics 4 for React.
- [x] [TypeScript](https://www.typescriptlang.org/)
- [x] [ESLint](https://eslint.org/)

## Contains predefined components:

### Layout

- [x] Shell Layout
- [x] Header
- [x] Footer
- [x] Left Sidebar (NavBar)
- [x] Right Sidebar (Aside)
- [x] Logo
- [x] Custom404

### User

- [x] UserAvatar
- [x] UserBlock
- [x] UserMenu
- [x] SingIn Form

### Other

- [x] HttpClient - primitive fetch wrapper for `/api/*` requests
- [x] ALink (link wrapper)
- [x] ColorSchemeToggle
- [x] Social Buttons
  - Facebook
  - Twitter
  - Google
  - Microsoft
  - GitHub

## Constants

- Auth Options
- Header Menu Items

## Backend helpers

- [x] MongoDB connection
- [x] Auth guard middleware
- [x] APIRestrictor to protect API routes
- [x] HTTPResponses to simplify API responses
- [x] getTranslations helper to export it as getStaticProps

## Pages

### Predefined

- `_app`
- `_document`
- `404`
- `500`

### Test samples

- `index`
- `mdx-test`
- `profile/index`

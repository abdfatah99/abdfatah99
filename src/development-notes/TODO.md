# Project Architecture

The `project architecture` define the architecture how the data flow between
FE and BE of the app. Next.js constructed by server and client side rendering,
by this `project architecture` define:

1. what is the component constructed in server?
2. what is the component constructed in client?
3. How data flow from the server component to client component and vice versa?

## Server vs Client Component

[mastering client and server component](https://dev.to/vyan/mastering-client-and-server-components-in-nextjs-a-comprehensive-guide-42hp)

### Client Component

> Focus on the things that needs client interaction

Only mark components as client components at the outer edges of the tree, i.e.,
the leaves. This minimizes the number of client components and maximizes the
benefits of server components.

### Server Component

1. Keep large dependecies on server side.
   Bloated big chunk of dependencies will not send into client. Improve perfomance
2.

TODO: continue to list what component better as client or as server

1. check chatgpt
2. check on the website
3. then continue to construct the architecture of the component.

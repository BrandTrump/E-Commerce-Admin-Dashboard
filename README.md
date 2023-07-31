## Credit
Tutorial by [Code With Antonio](https://www.youtube.com/@codewithantonio) - https://www.youtube.com/watch?v=5miHyP6lExg&list=LL&index=3

### Created With
- Next.js 13
- Tailwindcss
- TypeScript
- Shadcn/UI
- Clerk
- Cloudinary
- Prisma
- Planetscale
- Zustand

## Learnings
- Clerk authentication with Next.js 13
- Setting up sign-in/sign-up: https://clerk.com/docs/nextjs/get-started-with-nextjs
- Route Groups in the app directory to improve organization of routes/project files: https://nextjs.org/docs/app/building-your-application/routing/route-groups
- Introduction to shadcn/ui: https://ui.shadcn.com/docs
- Prisma schema: https://www.prisma.io/docs/concepts/components/prisma-schema
- Planetscale: https://planetscale.com/
- Safer to use style tag with dynamic styling because of the chance that tailwind will not complie dynamic css:
```js
 <div className="h-6 w-6 rounded-full border"
    style={{ backgroundColor: row.original.value }}
  ></div>
  ```

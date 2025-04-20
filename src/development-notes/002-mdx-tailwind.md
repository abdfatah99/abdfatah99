# MDX and Tailwind

## Configuring The Next.js MDX

Follow the instruction from [Next.js MDX documentation](https://nextjs.org/docs/app/building-your-application/configuring/mdx)

## Adding Tailwind to project

1. Add `tailwindcss/typography` plugins

```bash
yarn add @tailwindcss/typography
```

2. configure the tailwind plugins

`tailwind.config.js`

```js
module.exports = {
  plugins: [require("@tailwindcss/typography")],
};
```

Now you can use `prose` class from tailwindcss.
[More about `tailwindcss/typhography`](https://github.com/tailwindlabs/tailwindcss-typography)
[More about `prose`](https://versoly.com/versoly-ui/style-guide/prose)

# Custome MDX tailwind

[Official tailwindTypography github](https://github.com/tailwindlabs/tailwindcss-typography)  
[How to Create Consistent Styles with Tailwind, MDX, and HTML](https://www.franciscomoretti.com/blog/how-to-create-consistent-styles-with-tailwind-mdx-and-html)


# using rehype-pretty-code to styling the code tag

[source](https://rehype-pretty-code.netlify.app)

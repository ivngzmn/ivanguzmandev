![Portfolio](https://raw.githubusercontent.com/ivngzmn/ivanguzmandev/main/public/static/images/projects/MacBook-Pro-Portfolio.webp)

# Portfolio Website with Blog

My portfolio website made with Next.js, Tailwind CSS, TypeScript, GraphQL and GraphCMS for the blog. My website was inspired by @leerob's website.

## Lessons Learned

I had started to use React.js and wanted to give Next.js a try. Seeing @leerob's website gave me the inspiration to build my own website that was similar. As for getting the data I kept hearing about graphQL and since I am quite curious I decided to move forward with it. Coming from fetching data with REST api's was a bit of a challenge. The hardest part was getting the blog comments to work just right with GraphCMS. I kept getting errors that my mutations were not working so after a day of debugging and taking a few walks I figured out the issue. It turns out I needed to refresh my API token and grant it write access on GraphCMS. I do have to say console.log() saved the day on that one. Overall it was a great experience learning a new React library and new query language.

## Tech Stack

**Client:** Next.js, TailwindCSS

**Server:** Node, GraphQL

## Deploy your own

Deploy the your own boilerplate using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## License

[MIT](https://choosealicense.com/licenses/mit/)

# Zipper test task

Create landing page containing a listing of Zipper company's IT services.

[Figma file](https://www.figma.com/file/7aFeqp9RrKV2ddSuNmEN64/DG_Front_General_IT_Test?type=design&node-id=0%3A1&mode=design&t=aXyVFiLjqzwuYykW-1)

### [Production build on Netlify](https://zipper-services.netlify.app)

## Task conditions

- Use a framework for static site generation (SSG): Next, Gatsby, Astro
- You can use any CSS frameworks and UI components
- Import data of IT services from a local JSON file
- The search component should filter IT services by name
- The selector component should filter IT services by rating
- Pay attention to metadata for displaying previews in social networks and instant messengers

_Will be a plus:_

- TypeScript usage
- Adaptation of components for tablet and mobile version
- Site deployment on Vercel or similar services
- Getting data about the list of services via headless CMS (like Sanity or Dato) instead of local JSON file

---

## Framework commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Implementation features

- Perfect fluid responsive styling from 320px mobile to desktop screens
- Variable fonts
- Open Graph metadata and modern favicons set
- Separated JSON data of software categories and products
- Data contains useful priority and visibility properties
- SCSS and SCSS Modules
- Semantic markup and accessibility improvements
- A lot of little fun details and microanimations

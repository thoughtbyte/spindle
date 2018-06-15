# spindle: minimal site building with a modern toolset

This project is (currently) a proof of concept. This is an attempt to see how powerful a static site generator can be created on top of the modern JavaScript toolset, namely [parcel](https://parceljs.org/), an amazing build tool, and [commander](https://github.com/tj/commander.js/) and [inquirer](https://github.com/SBoudrias/Inquirer.js/).

## instructions

- install spindle globally: `yarn global add spindle-cli` or `npm install -g spindle-cli`

-  creating a new site: `spin site [name]` (after site is created, install dependencies in new site directory)

- all of the following commands are available and should be run at the project root:
  1.  creating a new post: `spin post [name]` this creates a post pug file and it's corresponding markdown file
  2.  creating a new page: `spin page [name]`

- `yarn dev` to run the dev server; make changes to `.pug`, `.md`, `.scss`, or `.js` files and the dev server will hot reload

- `yarn build` to build the project inside a `dist` directory

- pages and posts can contain `yaml` front matter, the functionality for this was worked into a separate custom pug plugin for parcel (no need to install this separately, just linking to it here for reference): [parcel-plugin-pug-front-matter](https://github.com/thoughtbyte/parcel-plugin-pug-front-matter)

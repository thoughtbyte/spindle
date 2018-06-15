# spindle: minimal site building with a modern toolset

This project is (currently) a proof of concept. This is an attempt to see how powerful a static site generator could be created on top of the modern JavaScript ecosystem, namely [parcel](https://parceljs.org/), an amazing build tool.

## instructions

- install spindle globally: `yarn global add spindle` or `npm install -g spindle`
- all of the following commands are available and should be run at the project root:
  1.  creating a new site: `spin site [name]`
  2.  creating a new post: `spin post [name]`
  3.  creating a new page: `spin page [name]`
- `yarn dev` to run the dev server; make changes to `.pug`, `.scss`, or `.js` files and the dev server will hot reload
- `yarn build` to build the project inside a `dist` directory
- pages and posts can contain `yaml` front matter, this was worked into a separate custom pug plugin for parcel: [parcel-plugin-pug-front-matter](https://github.com/thoughtbyte/parcel-plugin-pug-front-matter)

const packageJson = data =>
  `
{
  "name": "${data.name}",
  "version": "0.1.0",
  "description": "${data.description}",
  "author": "${data.author}",
  "devDependencies": {
    "autoprefixer": "^8.6.1",
    "babel-core": "^6.26.3",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-env": "^1.7.0",
    "babel-runtime": "^6.26.0",
    "gray-matter": "^4.0.1",
    "jstransformer-markdown-it": "^2.1.0",
    "node-sass": "^4.9.0",
    "parcel-bundler": "^1.8.1",
    "parcel-plugin-pug-front-matter": "^0.5.0",
    "parcel-plugin-sw-precache": "^0.5.1",
    "postcss": "^6.0.22",
    "pug": "^2.0.3"
  },
  "scripts": {
    "dev": "parcel ./src/index.pug",
    "build": "parcel build ./src/**/*.pug"
  },
  "browserslist": {
    "production": [
      "> 1%",
      "ie 10"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version"
    ]
  }
}
`;

module.exports = packageJson;

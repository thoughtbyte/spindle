#!/usr/bin/env node
const program = require('commander');
const site = require('./lib/site');
const page = require('./lib/page');
const post = require('./lib/post');

program
  .command('site <name>')
  .description('generate new spindle site')
  .action(siteName => {
    site.create(siteName);
  });

program
  .command('page')
  .description('generate new page')
  .action(pageTitle => {
    page.create(pageTitle);
  });

program
  .command('post')
  .description('generate new post')
  .action(postTitle => {
    post.create(postTitle);
  });

program.version(require('./package.json').version).parse(process.argv);

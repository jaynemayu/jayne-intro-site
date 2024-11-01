// place at : deploy/ghpages.js
// you can see more info at https://github.com/tschaub/gh-pages
const path = require('path');
const ghpages = require('gh-pages');

const options = {
    branch: 'gh-pages',
    repo: 'https://github.com/jaynemayu/jayne-intro-site.git' // 項目的 GitHub 儲存庫
};

const callback = (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('publish success');
    }
};

/**
 * This task pushes to the master branch of the configured repo.
 */
ghpages.publish(path.resolve(__dirname, '../dist'), options, callback);
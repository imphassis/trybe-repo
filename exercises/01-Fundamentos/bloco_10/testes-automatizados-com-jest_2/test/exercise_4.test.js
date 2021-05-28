const getRepos = require('../src/exercise_4');

const API_URL = 'https://api.github.com/orgs/tryber/repos';

describe('Checking if Trybe repo contains some subrepos', () => {
  it('Checking if the repo "sd-01-week4-5-project-todo-list" exists', async () => {
    const repoList = await getRepos(API_URL);
    return expect(repoList).toContain('sd-01-week4-5-project-todo-list');
  });
  it('Checking if the repo "sd-01-week4-5-project-meme-generator" exists', async () => {
    const repoList = await getRepos(API_URL);
    return expect(repoList).toContain('sd-01-week4-5-project-meme-generator');
  });
  it('Checking if the repo "sd-random-repo" exists', async () => {
    const repoList = await getRepos(API_URL);
    return expect(repoList).not.toContain('sd-random');
  });
});

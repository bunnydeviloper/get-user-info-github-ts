import { GithubApiService } from './GithubApiService';
import { User } from './User';
import { Repo } from './Repo';
import * as _ from 'lodash';

let svc = new GithubApiService();
svc.getUserInfo('bunnydeviloper', (user: User) => {
  svc.getRepos('bunnydeviloper', (repos: Repo[]) => {
    let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.size * -1]);
    // note: *-1 so we sort highest -> lowest
    let filteredRepos = _.take(sortedRepos, 3);
    user.repos = filteredRepos;
  });
});

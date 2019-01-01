import { GithubApiService } from './GithubApiService';
import { User } from './User';
import { Repo } from './Repo';
import * as _ from 'lodash';

let svc = new GithubApiService();

if (process.argv.length < 3) {
  console.log('Please pass username as argument (eg: npm start octocat)');
} else {
  let username = process.argv[2];

  svc.getUserInfo(username, (user: User) => {
    svc.getRepos(username, (repos: Repo[]) => {
      let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.size * -1]);
      // note: *-1 so we sort highest -> lowest
      let filteredRepos = _.take(sortedRepos, 3);
      user.repos = filteredRepos;
      console.log(user);
    });
  });
}

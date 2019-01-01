import { GithubApiService } from './GithubApiService';
import { User } from './User';
import { Repo } from './Repo';

let svc = new GithubApiService();
svc.getUserInfo('bunnydeviloper', (user: User) => {
  console.log(user);
});
svc.getRepos('bunnydeviloper', (repos: Repo[]) => {
  console.log(repos);
});

import { GithubApiService } from './GithubApiService';
import { User } from './User';

let svc = new GithubApiService();
svc.getUserInfo('bunnydeviloper', (user: User) => {
  console.log(user);
});
svc.getRepos('bunnydeviloper', (user: User) => {
  console.log(user);
});

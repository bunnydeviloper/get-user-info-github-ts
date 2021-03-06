import * as request from 'request';
import { User } from './User';
import { Repo } from './Repo';

const OPTIONS: any = {
  headers: {
    'User-Agent': 'request'
  },
  json: true, /* pass this arg in so you don't have to parse body */
};

export class GithubApiService {
  getUserInfo(userName: string, cb: (user: User) => any) {
    // request.get(url, headers, callback)
    request.get(
      'https://api.github.com/users/' + userName,
      OPTIONS,
      (error: any, response: any, body: any) => {
        let user = new User(body); // no need to parse b/c above
        cb(user);
      });
  }

  getRepos(userName: string, cb: (repos: Repo[]) => any) {
    request.get(
      'https://api.github.com/users/' + userName + '/repos',
      OPTIONS,
      (error: any, response: any, body: any) => {
        let repos = body.map((repo: any) => new Repo(repo));
        cb(repos);
      }
    );
  }
}

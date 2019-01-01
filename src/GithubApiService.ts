import * as request from 'request';
import { User } from './User';

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

  getRepos() {
    // do something
  }
}

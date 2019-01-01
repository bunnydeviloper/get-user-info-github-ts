import * as request from 'request';
import { User } from './User';

export class GithubApiService {
  getUserInfo(userName: string) {
    let options: any = {
      headers: {
        'User-Agent': 'request'
      },
      json: true, /* pass this arg in so you don't have to parse body */
    };

    // request.get(url, headers, callback)
    request.get(
      'https://api.github.com/users/' + userName,
      options,
      (error: any, response: any, body: any) => {
        let user = new User(body);
        console.log(user);
      });
  }

  getRepos() {
    // do something
  }
}

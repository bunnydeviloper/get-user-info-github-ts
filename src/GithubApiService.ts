import * as request from 'request';

export class GithubApiService {
  getUserInfo(userName: string) {
    let options: any = {
      headers: {
        'User-Agent': 'request'
      }
    };

    // request.get(url, headers, callback)
    request.get(
      'https://api.github.com/users/' + userName,
      options,
      (error: any, response: any, body: any) => {
        console.log('body: ', JSON.parse(body));
      });
  }

  getRepos() {
    // do something
  }
}

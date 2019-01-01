import * as request from 'request';

export class GithubApiService {
  getUserInfo(userName: string) {
    request.get('https://api.github.com/users/' + userName, (response: any) => {
      console.log(response);
    });
  }

  getRepos() {
    // do something
  }
}

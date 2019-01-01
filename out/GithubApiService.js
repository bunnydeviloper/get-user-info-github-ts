"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var GithubApiService = /** @class */ (function () {
    function GithubApiService() {
    }
    GithubApiService.prototype.getUserInfo = function (userName) {
        request.get('https://api.github.com/users/' + userName, function (response) {
            console.log(response);
        });
    };
    GithubApiService.prototype.getRepos = function () {
        // do something
    };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;

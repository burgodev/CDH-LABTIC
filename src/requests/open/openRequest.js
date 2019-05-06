import axios from 'axios';
export class openRequests {
    constructor(configs) {
        this._config = configs;
        console.log('configsOPEN', configs);
    }
    get config() {
        return this._config;
    }
    async login(data) {
        try {
            let ret = await axios({
                baseURL: `${this.config.protocol}://${this.config.baseUrl}:${this.config.port}/`,
                url: '/api/login',
                method: 'post',
                data: data,
            });
            return ret.data;
            localStorage.setItem('authenticationKey', ret.data.data.authenticationKey);
            localStorage.setItem('accessKey', ret.data.data.accessKey);
        }
        catch (e) {
            return e;
        }
    }
}
//# sourceMappingURL=openRequest.js.map
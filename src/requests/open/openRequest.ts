import axios from 'axios';
import {config, loginData} from '../'

export class openRequests {

  private readonly _config: config;

  constructor(configs: config) {
    this._config = configs;
    console.log('configsOPEN', configs)
  }

  private get config() {
    return this._config;
  }

  public async login(data: any) {
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

    } catch (e) {
      return e;
    }
  }


}

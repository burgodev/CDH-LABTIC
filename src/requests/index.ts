import {adminRequests} from './admin/adminRequest';
import {openRequests} from './open/openRequest';

let configs: config = {
  port: 1337,
  protocol: 'http',
  baseUrl: 'localhost',
};

let AdminRequest = new adminRequests(configs);
console.log('open', AdminRequest);

let OpenRequest = new openRequests(configs);

export {AdminRequest as AdminAPI};
export {OpenRequest as OpenAPI};


export interface config {
  port: number,
  protocol: string,
  baseUrl: string,
}

export interface createUser {
  Data: {
    email: String,
    name: String,
    surname: String,
    password: String,
    birthday: Number,
    cpf: Number,
    entryDate: Number,
    exitDate: Number
  }
}

export interface deleteUser {
  userId: String,
}

export interface loginData {
  login: String,
  password: String
}

export interface paramsCdhConsult {
  userId: String,
  month: Number,
  Year: Number

}

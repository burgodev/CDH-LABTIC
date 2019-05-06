import { adminRequests } from './admin/adminRequest';
import { openRequests } from './open/openRequest';
let configs = {
    port: 1337,
    protocol: 'http',
    baseUrl: 'localhost',
};
let AdminRequest = new adminRequests(configs);
console.log('open', AdminRequest);
let OpenRequest = new openRequests(configs);
export { AdminRequest as AdminAPI };
export { OpenRequest as OpenAPI };
//# sourceMappingURL=index.js.map
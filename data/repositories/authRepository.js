// Middleware.mjs
import APIRequest from "./data/api/authAPI";

class Middleware {
    constructor() {
        this.req = new APIRequest();
    }

    generateToken() {
        let valueCheck = this.req.getToken();
        if (valueCheck) {
            return 'error';
        } else {
            return 'berhasil';
        }
    }
}

const testing = new Middleware();
console.log(testing.generateToken());

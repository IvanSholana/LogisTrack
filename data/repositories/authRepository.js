// Middleware.mjs
import APIRequest from "../api/authAPI.js";

class Middleware {

    req = new APIRequest();

    async generateToken() {
        try {
            let valueCheck = await this.req.getToken();
            return valueCheck;
        } catch (error) {
            console.error(error);
        }
    }

    async getUserInfo(token) {
        try {
            let valueCheck = await this.req.getUserData(token);
            return valueCheck;
        } catch (error) {
            console.error(error);
        }
    }

    async registerUser(token, Name, Password, nomorInduk, Status, Prodi) {
        try {
            let valueCheck = await this.req.inputUserData(token, Name, Password, nomorInduk, Status, Prodi);
            return valueCheck;
        } catch (error) {
            console.error(error);
        }
    }
}

export default Middleware;


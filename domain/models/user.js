import Middleware from "./data/repositories/authRepositories";

class User{
    name;
    password;
    nomorInduk;
    status;
    prodi;
    req = Middleware();

    getUsers(token) {
        return this.req.getUserData(token);
    }

    generateToken() {
        return this.req.getToken();
    }

    

}

import React from 'react';
import Middleware from "../../data/repositories/authRepository.js";
// import dotenv from 'dotenv';
// dotenv.config()

class User extends React.Component {
    Users;
    Token;
    req = new Middleware();

    findUser(usersInfo, searchTerm){
        return usersInfo.filter(item => item.nomor_induk == searchTerm)
    }

    passCheck(nomorInduk, Password){
        let user = this.findUser(this.Users, nomorInduk)
        if(user.length == 0){
            return null
        }else if(user[0].password != Password){
            return null
        }else{
            return user
        }
    }

    nameFormat(Name){
        const validNameRegex = /[0-9\-\_\.\@\#\$\%\^\&\*\(\)]+/;
        if (validNameRegex.test(Name)) {
            return true;
        }else{
            return false
        }
    }

    emailFormat(Email){
        const validEmailRegex = /^[a-zA-Z0-9._-]+@student\.[a-zA-Z]+\.ittelkom-sby\.ac\.id$/;
        if (!validEmailRegex.test(Email)) {
            return true;
        }else{
            return false
        }
    }

    passwordFormat(Password){
        const validNameRegex = /\s/;
        if (validNameRegex.test(Password)) {
            return true;
        }else{
            return false
        }
    }

    NIFormat(nomorInduk){
        const validNameRegex = /[a-zA-Z\-\.\@\#\$\%\^\&\*\(\)]+/;
        if (validNameRegex.test(nomorInduk.toString())) {
            return true;
        }else{
            return false;
        }
    }

    statusCheck(Status){
        return Status.length == 0? true : false
    }


    valueCheck(Name, Email, Password, nomorInduk, Status){
        let errList = "";
        try{
            if(this.nameFormat(Name)){
                errList += "Incorrect format name."; 
            }
            if(this.emailFormat(Email)){
                errList += "Incorrect format email.";
            }
             
            if(this.passwordFormat(Password)){
                errList += "Incorrect format password.";
            }
    
            if(this.NIFormat(nomorInduk)){
                errList += "Wrong input, NIM/NIDN only contains number.";
            }

            if(this.statusCheck(Status)){
                errList += "No 'Status' were selected.";
            }

            if(errList.length > 0){
                throw new Error(errList);
            }else{
                return true
            }
        }catch(error){
            return error
        }
        
    }

    async findUsersInfo(nomorInduk, Password) {
        this.Users = await this.req.getUserInfo(this.Token);
        return this.passCheck(nomorInduk, Password);
    }

    async generateToken() {
        this.Token = await this.req.generateToken();
        this.Token = this.Token['token']
        // process.env.USER_TOKEN = this.Token;
        // return process.env.USER_TOKEN
        return this.Token;
    }

    async registerUser(Name, email, Password, nomorInduk, Status) {
        let validation = this.valueCheck(Name, email, Password, nomorInduk, Status)
        if(validation === true){
            return true;
        }else{
            return validation;
        }
        
    }

}

let object = new User();
console.log(await object.generateToken());
// console.log(await object.nameFormat('melon pan'));
// console.log(await object.findUsersInfo('1203210009', 'fern123'));
// console.log(await object.registerUser('melon pan', 'melon_123@student.is.ittelkom-sby.ac.id', 'melon@123', '1203210002', 'Dosen'));
export default User;
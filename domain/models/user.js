import React from "react";
//import Middleware from "../../data/repositories/authRepository.js";

class User extends React.Component {
  constructor(name, username, password, email, status, question, answer) {
    super();
    this.name = name;
    this.username = username;
    this.password = password;
    this.email = email;
    this.status = status;
    this.question = question;
    this.answer = answer;
  }
}

export default User;

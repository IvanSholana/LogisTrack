import React from "react";
import Middleware from "../../data/repositories/authRepository.js";
// import dotenv from 'dotenv';
// dotenv.config()

class User extends React.Component {
  constructor(
    nama,
    nimNidn,
    password,
    email,
    status,
    pertanyaanRahasia,
    jawabanRahasia
  ) {
    super(); // Tambahkan super() di sini jika Anda meng-extend dari class React.
    this.nama = nama;
    this.nimNidn = nimNidn;
    this.password = password;
    this.email = email;
    this.status = status;
    this.pertanyaanRahasia = pertanyaanRahasia;
    this.jawabanRahasia = jawabanRahasia;
  }
}

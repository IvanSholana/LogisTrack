import React from "react";

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


export default User

import User from "../../domain/models/user.js";


const users = [
  new User(
    "John Doe",
    "123456",
    "password123",
    "john.doe@example.com",
    "Dosen",
    "Siapa nama ibu kandung Anda?",
    "Jane Doe"
  ),
  new User(
    "Jane Smith",
    "789012",
    "pass456",
    "jane.smith@example.com",
    "Mahasiswa",
    "Apa nama hewan peliharaan Anda?",
    "Fluffy"
  ),
  new User(
    "Bob Johnson",
    "567890",
    "pass789",
    "bob.johnson@example.com",
    "Staff",
    "Di kota manakah Anda lahir?",
    "New York"
  ),
  new User(
    "Alice Brown",
    "234567",
    "pass321",
    "alice.brown@example.com",
    "Mahasiswa",
    "Apa warna favorit Anda?",
    "Blue"
  ),
];


console.log(JSON.stringify(users, undefined, 2));
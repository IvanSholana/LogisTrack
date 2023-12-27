import User from "../../domain/models/User";

const usersdata = [
  new User(
    "John Doe",
    "123",
    "123",
    "john.doe@example.com",
    "Dosen",
    "Siapa nama ibu kandung Anda?",
    "Jane Doe"
  ),
  new User(
    "Jane Smith",
    "1234",
    "1234",
    "jane.smith@example.com",
    "Admin",
    "Apa nama hewan peliharaan Anda?",
    "Fluffy"
  ),
  new User(
    "Bob Johnson",
    "567890",
    "pass789",
    "bob.johnson@example.com",
    "Admin",
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

export default usersdata;

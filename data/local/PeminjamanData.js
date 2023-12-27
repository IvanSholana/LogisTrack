import BarangDipinjam from "../../domain/models/BarangDipinjam";
import Peminjaman from "../../domain/models/Peminjaman";

const peminjamanList = [
  // Data yang telah Anda sediakan
  new Peminjaman(
    "001",
    "John Doe",
    "Seminar Teknologi",
    [new BarangDipinjam("001", 5), new BarangDipinjam("002", 2)],
    ["1", "2"],
    "2023-01-01",
    "00:00",
    "2023-01-02",
    "23:59",
    "Diajukan"
  ),
  new Peminjaman(
    "002",
    "Jane Smith",
    "Workshop Seni",
    [new BarangDipinjam("003", 10), new BarangDipinjam("004", 1)],
    ["3"],
    "2023-02-01",
    "00:00",
    "2023-02-03",
    "23:59",
    "Diajukan"
  ),
  new Peminjaman(
    "003",
    "Bob Johnson",
    "Rapat Koordinasi",
    [new BarangDipinjam("005", 3), new BarangDipinjam("006", 1)],
    ["4"],
    "2023-03-01",
    "00:00",
    "2023-03-02",
    "23:59",
    "Ditolak"
  ),

  // Data tambahan
  new Peminjaman(
    "004",
    "Alice Brown",
    "Acara Musik",
    [new BarangDipinjam("007", 8), new BarangDipinjam("008", 2)],
    ["5"],
    "2023-04-01",
    "00:00",
    "2023-04-02",
    "23:59",
    "Diajukan"
  ),
  new Peminjaman(
    "005",
    "Alice Brown",
    "Diskusi Komunitas",
    [new BarangDipinjam("009", 15), new BarangDipinjam("010", 5)],
    ["6"],
    "2023-05-01",
    "00:00",
    "2023-05-02",
    "23:59",
    "Disetujui"
  ),
  new Peminjaman(
    "006",
    "DJane Smith",
    "Pertandingan Olahraga",
    [new BarangDipinjam("011", 2), new BarangDipinjam("012", 10)],
    ["7"],
    "2023-06-01",
    "00:00",
    "2023-06-02",
    "23:59",
    "Selesai"
  ),
  new Peminjaman(
    "007",
    "Alice Brown",
    "Sosialisasi Kesehatan",
    [new BarangDipinjam("001", 50), new BarangDipinjam("002", 1)],
    ["8"],
    "2023-07-01",
    "00:00",
    "2023-07-02",
    "23:59",
    "Ditolak"
  ),
  new Peminjaman(
    "008",
    "Alice Brown",
    "Ujian Online",
    [new BarangDipinjam("006", 30), new BarangDipinjam("002", 3)],
    ["9"],
    "2023-08-01",
    "00:00",
    "2023-08-02",
    "23:59",
    "Diajukan"
  ),
  new Peminjaman(
    "009",
    "John Doe",
    "Seminar Keuangan",
    [new BarangDipinjam("005", 1), new BarangDipinjam("002", 5)],
    ["1"],
    "2023-09-01",
    "00:00",
    "2023-09-02",
    "23:59",
    "Disetujui"
  ),
  new Peminjaman(
    "010",
    "John Doe",
    "Pertunjukan Teater",
    [new BarangDipinjam("003", 1), new BarangDipinjam("004", 15)],
    ["9"],
    "2023-10-01",
    "00:00",
    "2023-10-02",
    "23:59",
    "Selesai"
  ),
];
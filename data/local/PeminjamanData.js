import BarangDipinjam from "../../domain/models/BarangDipinjam";
import Peminjaman from "../../domain/models/Peminjaman";

const peminjamanList = [
  new Peminjaman(
    "001",
    "John Doe",
    "Seminar Teknologi",
    [new BarangDipinjam("001", 5), new BarangDipinjam("002", 2)],
    ["101", "102"],
    "2023-01-01",
    "2023-01-02",
    "Ditolak",
    "Peminjaman untuk seminar teknologi"
  ),
  new Peminjaman(
    "002",
    "Jane Smith",
    "Workshop Seni",
    [new BarangDipinjam("003", 10), new BarangDipinjam("004", 1)],
    ["103"],
    "2023-02-01",
    "2023-02-03",
    "Diajukan",
    "Peminjaman untuk workshop seni"
  ),
  new Peminjaman(
    "003",
    "Bob Johnson",
    "Rapat Koordinasi",
    [new BarangDipinjam("005", 3), new BarangDipinjam("006", 1)],
    ["102"],
    "2023-03-01",
    "2023-03-02",
    "Ditolak",
    "Peminjaman untuk rapat koordinasi"
  ),
  new Peminjaman(
    "004",
    "Eva Garcia",
    "Acara Musik",
    [new BarangDipinjam("007", 8), new BarangDipinjam("008", 2)],
    ["105"],
    "2023-04-01",
    "2023-04-02",
    "Diajukan",
    "Peminjaman untuk acara musik"
  ),
  new Peminjaman(
    "005",
    "Chris Williams",
    "Diskusi Komunitas",
    [new BarangDipinjam("009", 15), new BarangDipinjam("010", 5)],
    ["109"],
    "2023-05-01",
    "2023-05-02",
    "Disetujui",
    "Peminjaman untuk diskusi komunitas"
  ),
  new Peminjaman(
    "006",
    "David Lee",
    "Pertandingan Olahraga",
    [new BarangDipinjam("011", 2), new BarangDipinjam("012", 10)],
    ["107"],
    "2023-06-01",
    "2023-06-02",
    "Selesai",
    "Peminjaman untuk pertandingan olahraga"
  ),
  new Peminjaman(
    "007",
    "Grace Miller",
    "Sosialisasi Kesehatan",
    [new BarangDipinjam("013", 50), new BarangDipinjam("014", 1)],
    ["108"],
    "2023-07-01",
    "2023-07-02",
    "Ditolak",
    "Peminjaman untuk sosialisasi kesehatan"
  ),
  new Peminjaman(
    "008",
    "Henry Clark",
    "Ujian Online",
    [new BarangDipinjam("015", 30), new BarangDipinjam("016", 3)],
    ["109"],
    "2023-08-01",
    "2023-08-02",
    "Diajukan",
    "Peminjaman untuk ujian online"
  ),
  new Peminjaman(
    "009",
    "Olivia Turner",
    "Seminar Keuangan",
    [new BarangDipinjam("017", 1), new BarangDipinjam("018", 5)],
    ["110"],
    "2023-09-01",
    "2023-09-02",
    "Disetujui",
    "Peminjaman untuk seminar keuangan"
  ),
  new Peminjaman(
    "010",
    "Samuel White",
    "Pertunjukan Teater",
    [new BarangDipinjam("019", 1), new BarangDipinjam("020", 15)],
    ["111"],
    "2023-10-01",
    "2023-10-02",
    "Selesai",
    "Peminjaman untuk pertunjukan teater"
  ),
];

export default peminjamanList;
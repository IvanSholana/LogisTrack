class Peminjaman {
  constructor(
    id,
    namaPeminjam,
    namaAcara,
    peralatanDipinjam,
    ruanganDipinjam,
    tanggalAwal,
    tanggalAkhir,
    status,
    alasan
  ) {
    this.id = id;
    this.namaPeminjam = namaPeminjam;
    this.namaAcara = namaAcara;
    this.peralatanDipinjam = peralatanDipinjam;
    this.ruanganDipinjam = ruanganDipinjam;
    this.tanggalAwal = tanggalAwal;
    this.tanggalAkhir = tanggalAkhir;
    this.status = status;
    this.alasan = alasan;
  }
}

export default Peminjaman;

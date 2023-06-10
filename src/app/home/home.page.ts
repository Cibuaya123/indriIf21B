import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nik: string;
  nama: string;
  tempatTanggalLahir: string;
  jenisKelamin: string;
  alamat: string;

  private historiDirectory = 'path/to/history';

  constructor(private http: HttpClient) {
    this.nik = '';
    this.nama = '';
    this.tempatTanggalLahir = '';
    this.jenisKelamin = '';
    this.alamat = '';
  }

  submitForm() {
    const data = {
      nik: this.nik,
      nama: this.nama,
      tempatTanggalLahir: this.tempatTanggalLahir,
      jenisKelamin: this.jenisKelamin,
      alamat: this.alamat
    };

    // Simpan data ke direktori histori
    this.http.post(`${this.historiDirectory}/data.txt`, JSON.stringify(data))
      .subscribe(
        () => {
          console.log('Data berhasil disimpan ke direktori histori.');
        },
        (error) => {
          console.error('Terjadi kesalahan saat menyimpan data:', error);
        }
      );
  }
}

const express = require('express');
const router = express.Router();
const db = require('../db');

// Endpoint GET semua data sekolah
router.get('/', (req, res) => {
  const query = 'SELECT * FROM sekolah ORDER BY created_at DESC';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching sekolah:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

// Endpoint POST tambah data sekolah
router.post('/', (req, res) => {
  const { tipe_sekolah, nama_sekolah, alamat, kode_pos, provinsi, kota, no_telepon, email, facebook, jumlah_siswa, foto } = req.body;

  const query = `
    INSERT INTO sekolah (
      tipe_sekolah, nama_sekolah, alamat, kode_pos, provinsi,
      kota, no_telepon, email, facebook, jumlah_siswa, foto
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [tipe_sekolah, nama_sekolah, alamat, kode_pos, provinsi, kota, no_telepon, email, facebook, jumlah_siswa, foto];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error inserting sekolah:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'Sekolah berhasil ditambahkan!', id: result.insertId });
  });
});

module.exports = router;

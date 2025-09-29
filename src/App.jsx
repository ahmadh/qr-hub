import './App.css'
import { useState } from 'react';

// 1. Impor gambar QR Code Anda dari folder assets
// Pastikan Anda sudah menempatkan file gambar QR di folder `src/assets`
import qrCode1 from './assets/Surabaya.png';
import qrCode2 from './assets/Bekasi.png';
import qrCode3 from './assets/Medan.png';

function App() {
  const [modalContent, setModalContent] = useState(null);

  const qrData = [
    {
      id: 1,
      title: 'Pabrik Surabaya',
      qrImage: qrCode1,
      infoQR: `Nama produk: Produk A
Masa berlaku: 23 Januari 2026
Nama Pabrik: PT A
Alamat Pabrik: Surabaya`
    },
    {
      id: 2,
      title: 'Pabrik Bekasi',
      qrImage: qrCode2,
      infoQR: `Nama produk: Produk B
Masa berlaku: 13 Januari 2027
Nama Pabrik: PT B
Alamat Pabrik: Bekasi`
    },
    {
      id: 3,
      title: 'Pabrik Medan',
      qrImage: qrCode3,
      infoQR: `Nama produk: Produk C
Masa berlaku: 21 Januari 2027
Nama Pabrik: PT C
Alamat Pabrik: Medan`
    }
  ];

  return (
    
    <div className="min-h-screen bg-white flex flex-col items-center p-8 font-sans">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">QR Hub</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Pindai salah satu QR di bawah atau klik tombol "Lihat info" tanpa harus scan ulang.
        </p>
      </header>
      
      {/* Container untuk daftar QR code */}
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-5xl">
        {qrData.map((item) => (
          <div 
            key={item.id} 
            // Styling Card: latar belakang putih, padding, sudut membulat, bayangan
            className="qr-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 w-full sm:w-64 flex flex-col items-center text-center border border-gray-100"
          >
            {/* Judul Card */}
            <h3 className="text-xl font-semibold text-gray-800 mb-6">{item.title}</h3>
            
            {/* Gambar QR Code */}
            <img 
              src={item.qrImage} 
              // Lebar dan tinggi gambar, pastikan gambar memiliki rasio aspek 1:1
              className="w-48 h-48 object-contain mb-8" 
              alt={`QR Code untuk ${item.title}`} 
            />
            
            {/* Tombol Lihat Info - dibuat hitam dan solid */}
            <button 
              onClick={() => setModalContent(item.infoQR)}
              className="info-button bg-gray-900 text-white font-medium py-3 px-8 rounded-lg hover:bg-gray-700 transition duration-150 shadow-md mb-2"
            >
              Lihat info
            </button>

            {/* Teks kecil di bawah tombol sesuai gambar */}
            <p className="text-xs text-gray-500 mt-3 max-w-[80%]">
              Konten bukan URL. Anda tetap bisa menyalinnya.
            </p>
          </div>
        ))}
      </div>

      {/* Dialog Box (Modal) */}
      {modalContent && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center p-4 z-50"
          onClick={() => setModalContent(null)} // Menutup modal saat area luar diklik
        >
          <div 
            className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full text-center"
            onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat area dalam diklik
          >
            <h4 className="text-xl font-bold text-gray-900 mb-4">Konten QR Code</h4>
            <p className="text-gray-700 mb-6 break-words bg-gray-100 p-4 rounded-md">{modalContent}</p>
            <button
              onClick={() => setModalContent(null)}
              className="bg-gray-900 text-white font-medium py-2 px-8 rounded-lg hover:bg-gray-700 transition duration-150"
            >Tutup</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App

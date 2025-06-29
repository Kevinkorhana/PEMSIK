import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@/Pages/Layouts/Components/Card";
import Heading from "@/Pages/Layouts/Components/Heading";
import { getMahasiswa } from "@/Utils/Apis/MahasiswaApi";
import { toastError } from "@/Utils/Helpers/ToastHelpers";

const MahasiswaDetail = () => {
  const { id } = useParams(); // menggunakan ID dari URL
  const [mahasiswa, setMahasiswa] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetchMahasiswaById();
  }, [id]);

const fetchMahasiswaById = async () => {
  try {
    const res = await getMahasiswa(id);
    setMahasiswa(res);
  } catch (err) {
    toastError("Gagal mengambil data mahasiswa: " + err.message);
  } finally {
    setLoading(false);
  }
};


  if (loading) return <p className="text-center">Memuat data...</p>;

  if (!mahasiswa) {
    return <p className="text-red-600 text-center">Data mahasiswa tidak ditemukan.</p>;
  }

  return (
    <Card>
      <Heading as="h2" className="mb-4 text-left">Detail Mahasiswa</Heading>
      <table className="table-auto text-sm w-full">
        <tbody>
          <tr>
            <td className="py-2 px-4 font-medium">NIM</td>
            <td className="py-2 px-4">{mahasiswa.nim}</td>
          </tr>
          <tr>
            <td className="py-2 px-4 font-medium">Nama</td>
            <td className="py-2 px-4">{mahasiswa.name}</td>
          </tr>
          {/* Tambahkan field lain jika ada */}
        </tbody>
      </table>
    </Card>
  );
};

export default MahasiswaDetail;

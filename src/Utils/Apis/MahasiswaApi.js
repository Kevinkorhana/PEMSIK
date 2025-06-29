import axios from "axios";

// Ambil data mahasiswa dengan filter + pagination
export const fetchMahasiswa = async (params = {}) => {
  const res = await axios.get("http://localhost:3001/mahasiswa", {
    params,
  });

  return {
    data: res.data,
    total: parseInt(res.headers["x-total-count"]) || res.data.length,
  };
};

// Ambil mahasiswa berdasarkan ID
export const getMahasiswa = async (id) => {
  const res = await axios.get(`http://localhost:3001/mahasiswa/${id}`);
  return res.data;
};

// Ambil semua mahasiswa tanpa filter (untuk dropdown, dsb)
export const getAllMahasiswa = async () => {
  const res = await axios.get("http://localhost:3001/mahasiswa");
  return { data: res.data };
};

// Tambah mahasiswa
export const storeMahasiswa = async (data) => {
  const res = await axios.post("http://localhost:3001/mahasiswa", data);
  return res.data;
};

// Update mahasiswa
export const updateMahasiswa = async ({ id, data }) => {
  const res = await axios.put(`http://localhost:3001/mahasiswa/${id}`, data);
  return res.data;
};

// Hapus mahasiswa
export const deleteMahasiswa = async (id) => {
  const res = await axios.delete(`http://localhost:3001/mahasiswa/${id}`);
  return res.data;
};

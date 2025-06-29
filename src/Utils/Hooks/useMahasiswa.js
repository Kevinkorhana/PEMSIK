import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchMahasiswa,
  storeMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
} from "@/Utils/Apis/MahasiswaApi";

// Hook untuk mendapatkan data mahasiswa dengan parameter (pagination, sort, search)
export const useMahasiswa = (params) =>
  useQuery({
    queryKey: ["mahasiswa", params],
    queryFn: async () => {
      const result = await fetchMahasiswa(params);

      // Pastikan hasil berupa { data: [], total: number }
      if (!result || !Array.isArray(result.data)) {
        console.warn("Data mahasiswa tidak valid:", result);
        return { data: [], total: 0 };
      }

      return result;
    },
    keepPreviousData: true, // agar tidak flicker saat ganti page
  });

// Hook untuk menambahkan mahasiswa baru
export const useStoreMahasiswa = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: storeMahasiswa,
    onSuccess: () => {
      queryClient.invalidateQueries(["mahasiswa"]);
    },
  });
};

// Hook untuk update mahasiswa
export const useUpdateMahasiswa = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateMahasiswa,
    onSuccess: () => {
      queryClient.invalidateQueries(["mahasiswa"]);
    },
  });
};

// Hook untuk hapus mahasiswa
export const useDeleteMahasiswa = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteMahasiswa,
    onSuccess: () => {
      queryClient.invalidateQueries(["mahasiswa"]);
    },
  });
};

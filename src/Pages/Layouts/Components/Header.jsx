import { useAuthStateContext } from "@/Utils/Contexts/AuthContext"; // pastikan path ini sesuai
import Button from "@/Pages/Layouts/Components/Button";
import { confirmLogout } from "@/Utils/Helpers/SwalHelpers";

const Header = () => {
  const { user } = useAuthStateContext(); // akses user dari context

  const toggleProfileMenu = () => {
    const menu = document.getElementById("profileMenu");
    if (menu) menu.classList.toggle("hidden");
  };

  const handleLogout = () => {
    confirmLogout(() => {
      localStorage.removeItem("user");
      location.href = "/";
    });
  };

  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Mahasiswa</h1>
          <p className="text-sm text-gray-600">
            Login sebagai: <strong>{user?.role}</strong>
          </p>
        </div>

        <div className="relative">
          <Button
            onClick={toggleProfileMenu}
            className="w-8 h-8 rounded-full bg-gray-300 focus:outline-none"
          />
          <div
            id="profileMenu"
            className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 hidden"
          >
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Profile
            </a>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

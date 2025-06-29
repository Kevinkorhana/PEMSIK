import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell,
  LineChart, Line,
  ResponsiveContainer
} from 'recharts';

// === DATA DUMMY SESUAI db.json ===

// Pie Chart: Distribusi Mahasiswa berdasarkan max_sks category
const pieData = [
  { name: '≤18 SKS', value: 9 },
  { name: '19–21 SKS', value: 6 },
  { name: '>21 SKS', value: 5 },
];

// Bar Chart: Dosen dan kapasitas SKS
const dosenData = [
  { name: 'Slamet', max_sks: 12 },
  { name: 'Tini', max_sks: 10 },
  { name: 'Udin', max_sks: 14 },
  { name: 'Vina', max_sks: 16 },
  { name: 'Wawan', max_sks: 8 },
];

// Line Chart: Distribusi Mahasiswa per max_sks
const lineData = [
  { max_sks: 18, jumlah: 7 },
  { max_sks: 20, jumlah: 5 },
  { max_sks: 21, jumlah: 2 },
  { max_sks: 22, jumlah: 2 },
  { max_sks: 24, jumlah: 2 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Selamat Datang di Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pie Chart */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Distribusi SKS Mahasiswa</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#8884d8"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">SKS Maksimal Dosen</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={dosenData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="max_sks" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Jumlah Mahasiswa per max_sks</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="max_sks" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="jumlah" stroke="#ff7300" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
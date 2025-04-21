import RevenueChart from '../components/Admin/RevenueChart';
import Sidebar from '../components/Admin/Sidebar';
import '../assets/style/AdminHome.scss';
import { useState, useEffect } from 'react';

const AdminHome = () => {
  const [revenueData, setRevenueData] = useState([])

  useEffect(() => {
    const mockData = [
      { month: 'Tháng 1', revenue: 50000000, nature: 70000000 },
      { month: 'Tháng 2', revenue: 60000000, nature: 90000000 },
      { month: 'Tháng 3', revenue: 75000000, nature: 70000000 },
      { month: 'Tháng 4', revenue: 90000000, nature: 70000000 },
      { month: 'Tháng 5', revenue: 80000000, nature: 20000000 },
      { month: 'Tháng 6', revenue: 90000000, nature: 105000000 },
    ]
    setRevenueData(mockData)
  }, [])
  return (
    <div className="admin-home">
      <Sidebar />
      <div className="admin-home__content">
        <RevenueChart data={revenueData}/>
        <div className="stats-cards">
          <div className="stats-card">
            <h3>Tổng doanh thu</h3>
            <p>50,000,000 VND</p>
          </div>
          <div className="stats-card">
            <h3>Tổng số vé bán</h3>
            <p>1,200</p>
          </div>
          <div className="stats-card">
            <h3>Phim đang chiếu</h3>
            <p>5</p>
          </div>
          <div className="stats-card">
            <h3>Người dùng</h3>
            <p>350</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
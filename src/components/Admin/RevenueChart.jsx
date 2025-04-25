import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import '../../assets/style/RevenueChart.scss';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const RevenueChart = ({ data }) => {
    const chartData = {
      labels: data.map(item => item.month),
      datasets: [
        {
          label: 'Doanh thu (VNĐ)',
          data: data.map(item => item.revenue),
          borderColor: 'rgba(52, 152, 219, 1)',
          backgroundColor: 'rgba(52, 152, 219, 0.1)',
          tension: 0.4
        },
        {
          label: 'Dự đoán (VNĐ)',
          data: data.map(item => item.nature), // Ví dụ dữ liệu dự đoán
          borderColor: 'rgba(231, 76, 60, 1)',
          backgroundColor: 'rgba(231, 76, 60, 0.1)',
          borderDash: [5, 5], // Đường đứt nét
          tension: 0.4
        }
      ],
    };
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return new Intl.NumberFormat('vi-VN', { 
                style: 'currency', 
                currency: 'VND' 
              }).format(context.raw)
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return new Intl.NumberFormat('vi-VN', { 
                style: 'currency', 
                currency: 'VND',
                maximumFractionDigits: 0
              }).format(value)
            }
          }
        }
      }
    };

    return (
      <div className="revenue-chart-container">
        <Line data={chartData} options={options} className="chartjs-animate" />
      </div>
    )
  };
  
  export default RevenueChart;
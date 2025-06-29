import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const ProfileChart = ({ history }) => {
  const data = {
    labels: history.map((entry, idx) => `Quiz ${idx + 1} (${entry.subject})`),
    datasets: [
      {
        label: 'Score',
        data: history.map(entry => entry.score),
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'blue',
      },
    ],
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto' }}>
      <h3>Your Quiz Progress</h3>
      <Line data={data} />
    </div>
  );
};

export default ProfileChart;

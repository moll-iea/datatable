import React from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
} from 'chart.js';
import { Container, Grid, Paper, Typography } from '@mui/material';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title
);

const multiClassTypeData = {
  labels: ['dos', 'normal', 'probe', 'u2r', 'r2l'],
  datasets: [
    {
      label: 'Frequency',
      data: [10, 20, 5, 2, 3], // Replace with actual data from your database
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const binaryClassTypeData = {
  labels: ['normal', 'attack'],
  datasets: [
    {
      label: 'Frequency',
      data: [30, 70], // Replace with actual data from your database
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 99, 132, 0.2)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const modelPrecisionData = {
  labels: ['KNN', 'RANDOM FOREST', 'CNN', 'LSTM'],
  datasets: [
    {
      label: 'Precision',
      data: [0.97, 0.99, 0.94, 0.94], // Replace with actual data from your database
      fill: false,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
    },
  ],
};

function ChartsPage() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Charts
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Pie Chart - MultiClassType Values
            </Typography>
            <Pie data={multiClassTypeData} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Bar Chart - BinaryClassType Values
            </Typography>
            <Bar data={binaryClassTypeData} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Line Chart - Model Precision
            </Typography>
            <Line data={modelPrecisionData} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ChartsPage;
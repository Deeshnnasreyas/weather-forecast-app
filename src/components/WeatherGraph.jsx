// WeatherGraph.js
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WeatherGraph = ({ weather, units }) => {
  console.log("we", weather);
  const daily = weather.daily.map((item) => item.temp);
  const hourly = weather.hourly.map((item) => item.temp);
  const titleDaily = weather.daily.map((item) => item.title);

  console.log("daily", daily);
  const data = {
    labels: titleDaily, // Times of the day
    datasets: [
      {
        label: "Temperature Daily (°C)", // Temperature in Celsius
        data: daily, // Example temperatures
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
      {
        label: "Temperature hourly (°C)", // Example additional weather unit
        data: hourly, // Example humidity levels
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Value",
        },
      },
      x: {
        title: {
          display: true,
          text: "Time of Day",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Weather Forecast (Temperature and Humidity)",
      },
    },
  };

  return (
    <div style={{ width: "80%", height: "400px", margin: "0 auto" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default WeatherGraph;

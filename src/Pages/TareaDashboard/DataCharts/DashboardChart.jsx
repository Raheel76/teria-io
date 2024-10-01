import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["2 Mar", "3 Mar", "4 Mar", "5 Mar", "6 Mar", "7 Mar", "8 Mar"],
  datasets: [
    {
      label: "Done",
      data: [60, 140, 130, 150, 180, 170, 160],
      backgroundColor: "rgb(75, 192, 192)",
    },
    {
      label: "In Progress",
      data: [170, 130, 110, 140, 170, 160, 150],
      backgroundColor: "rgb(54, 162, 235)",
    },
    {
      label: "Overdue",
      data: [90, 90, 80, 70, 90, 80, 70],
      backgroundColor: "rgb(255, 99, 132)",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Task Progress Overview",
    },
  },
};
const dataTwo = {
  labels: ["2 Mar", "3 Mar", "4 Mar", "5 Mar", "6 Mar", "7 Mar", "8 Mar"],
  datasets: [
    {
      label: "Done",
      data: [30, 50, 130, 50, 180, 140, 160],
      backgroundColor: "rgb(75, 192, 192)",
    },
    {
      label: "In Progress",
      data: [70, 170, 50, 140, 170, 160, 150],
      backgroundColor: "rgb(54, 162, 235)",
    },
    {
      label: "Overdue",
      data: [170, 70, 160, 70, 90, 90, 70],
      backgroundColor: "rgb(255, 99, 132)",
    },
  ],
};

const dataThree = {
  labels: ["2 Mar", "3 Mar", "4 Mar", "5 Mar", "6 Mar", "7 Mar", "8 Mar"],
  datasets: [
    {
      label: "Done",
      data: [50, 80, 180, 145, 160, 150, 160],
      backgroundColor: "rgb(75, 192, 192)",
    },
    {
      label: "In Progress",
      data: [140, 134, 90, 140, 100, 160, 150],
      backgroundColor: "rgb(54, 162, 235)",
    },
    {
      label: "Overdue",
      data: [170, 180, 160, 60, 170, 150, 130],
      backgroundColor: "rgb(255, 99, 132)",
    },
  ],
};
const DashboardChart = () => {
  const [isToday, setIsToday] = useState(true);
  const [isWeek, setIsWeek] = useState(false);
  const [isMonth, setIsMonth] = useState(false);
  const [isYear, setIsYear] = useState(false);
  const [isTotal, setIsTotal] = useState(false);

  const toggleisToday = () => {
    setIsToday(true);
    setIsWeek(false);
    setIsMonth(false);
    setIsYear(false);
    setIsTotal(false);
  };
  const toggleisWeek = () => {
    setIsWeek(true);
    setIsToday(false);
    setIsMonth(false);
    setIsYear(false);
    setIsTotal(false);
  };
  const toggleisMonth = () => {
    setIsMonth(true);
    setIsWeek(false);
    setIsToday(false);
    setIsYear(false);
    setIsTotal(false);
  };
  const toggleisYear = () => {
    setIsYear(true);
    setIsMonth(false);
    setIsWeek(false);
    setIsToday(false);
    setIsTotal(false);
  };
  const toggleisTotal = () => {
    setIsTotal(true);
    setIsYear(false);
    setIsMonth(false);
    setIsWeek(false);
    setIsToday(false);
  };

  useEffect(() => {
    setIsToday(true);
    setIsWeek(false);
    setIsMonth(false);
    setIsYear(false);
    setIsTotal(false);
  }, []);
  return (
    <>
      <div className="row my-5">
        <div className="col-lg-3">
          <div className="chart-tabs d-flex align-items-center  ">
            <div className={`chart-tab ${isToday && "active"}`}>
              <h6 className="m-0 fs-14" onClick={toggleisToday}>
                Today
              </h6>
            </div>
            <div
              className={`chart-tab ${isWeek && "active"}`}
              onClick={toggleisWeek}
            >
              <h6 className="m-0 fs-14">This Week</h6>
            </div>
            <div
              className={`chart-tab ${isMonth && "active"}`}
              onClick={toggleisMonth}
            >
              <h6 className="m-0 fs-14">This Month</h6>
            </div>
            <div
              className={`chart-tab ${isYear && "active"}`}
              onClick={toggleisYear}
            >
              <h6 className="m-0 fs-14">This Year</h6>
            </div>
            <div
              className={`chart-tab ${isTotal && "active"}`}
              onClick={toggleisTotal}
            >
              <h6 className="m-0 fs-14">Total</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="chart-input position-relative">
            <input type="text" placeholder="Date range..." />
            <div className="chart-calendar-icon icony-size position-absolute">
            <iconify-icon  icon="iconoir:calendar"></iconify-icon>
            </div>
          </div>
        </div>
      </div>
      {isToday && <Bar data={data} options={options} />}
      {isWeek && <Bar data={dataTwo} options={options} />}
      {isMonth && <Bar data={dataThree} options={options} />}
      {isYear && <Bar data={data} options={options} />}
      {isTotal && <Bar data={dataTwo} options={options} />}
    </>
  );
};

export default DashboardChart;

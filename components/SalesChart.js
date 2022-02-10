import React, { useRef, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";
import { kFormatter } from "../hooks/kFormat";

const SalesChart = ({ labels, data, bgColor, borderColor }) => {
  // When chart type is change, scroll into this to prevent srcolling from top.
  const chartRef = useRef();

  // Chart options. Legends are turned off, responsive layout.
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    scales: {
      y: {
        ticks: {
          // Include a "k" in the ticks. Example: 5,000 to 5k
          callback: function (value, index, ticks) {
            return kFormatter(value);
          },
        },
      },
    },
  };

  // Data fetch from API
  const chatData = {
    labels,
    datasets: [
      {
        data: data,
        backgroundColor: [bgColor],
        borderColor: [borderColor],
      },
    ],
  };

  // State for handling the index of an active tab and chart component
  const [openTab, setOpenTab] = useState(0);

  // Array for the dynamic tab and displaying different chart type
  // You can add more chart types but I think this is enough for the use case
  const chartTypes = [
    {
      label: "Line",
      component: <Line options={options} data={chatData} />,
    },
    {
      label: "Bar",
      component: <Bar options={options} data={chatData} />,
    },
  ];

  return (
    <div className="flex-col space-y-2">
      <h1 className="font-semibold text-xl">Revenue per day</h1>
      {/* Loop the array to create a dynamic tab */}
      <div className="flex flex-row items-center space-x-2 border-b">
        {chartTypes.map((ct, index) => {
          return (
            // Set an active state to the selected tab. For this, I just put an orange bottom border.
            <div
              className={`${
                index === openTab && "border-b-2 border-orange-500 black"
              } px-2 py-1 hover:cursor-pointer hover:text-orange-500`}
              key={index}
              onClick={() => {
                setOpenTab(index);
                chartRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {ct.label}
            </div>
          );
        })}
      </div>
      {/* Display the chart selected */}
      <div>
        {chartTypes.map((ct, index) => {
          if (openTab === index) {
            return <div key={index}>{ct.component}</div>;
          }
        })}
      </div>
      <div ref={chartRef} />
    </div>
  );
};

export default SalesChart;

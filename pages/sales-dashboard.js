import axios from "axios";
import React, { useEffect, useState } from "react";
import Orders from "../components/Orders";
import SalesChart from "../components/SalesChart";
import Container from "../components/Container";
import Head from "next/head";
import Footer from "../components/Footer";

const SalesDashboard = () => {
  // Initial states
  const [orders, setOrders] = useState([]);
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);
  const [borderColor, setBorderColor] = useState("");
  const [bgColor, setBgColor] = useState("");

  // Let us fetch the data from the API
  const getSales = async () => {
    const data = await axios.get("./api/sales");

    // Let us set the current state to a new state after data is fetched
    setOrders(data.data.orders);
    setLabels(data.data.revenueThisWeek.labels);
    setData(data.data.revenueThisWeek.datasets[0].data);
    setBgColor(data.data.revenueThisWeek.datasets[0].backgroundColor);
    setBorderColor(data.data.revenueThisWeek.datasets[0].borderColor);
    // console.log(data.data.revenueThisWeek.datasets[0])
  };

  useEffect(() => {
    getSales();
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col space-y-2">
        <div className="bg-zinc-100">
          <Container>
            {/* Order component */}
            <Orders orders={orders} />
          </Container>
        </div>

        <Container>
          {/* Chart component */}
          <SalesChart
            labels={labels}
            data={data}
            borderColor={borderColor}
            bgColor={bgColor}
          />
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default SalesDashboard;

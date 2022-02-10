import { kFormatter } from "../hooks/kFormat";
import Clock from "react-live-clock";
import OrdersLoader from "./OrdersLoader";

const Orders = ({ orders }) => {
  const currentDate = new Date(); // Current date

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <h1 className="font-bold text-2xl text-orange-500">Orders per state</h1>
        <div className="flex items-center space-x-3">
          <p>{currentDate.toDateString()}</p>
          {/* Realtime clock */}
          <Clock
            format={"h:mm:ssa"}
            ticking={true}
            timezone={"Australia/Sydney"}
          />
        </div>
      </div>
      {/* Display orders per state */}
      {!orders ? (
        <OrdersLoader />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {orders.map((order, index) => {
            return (
              <OrderItem key={index} state={order.state} total={order.total} />
            );
          })}
        </div>
      )}
    </div>
  );
};

// Order item of a state
const OrderItem = ({ state, total }) => {
  return (
    <div className="p-4 flex flex-row lg:flex-col justify-between items-center bg-white shadow rounded-lg hover:shadow-lg hover:cursor-default">
      <h1 className="uppercase">{state}</h1>
      <h1 className="font-bold text-3xl">{kFormatter(total)}</h1>
    </div>
  );
};

export default Orders;

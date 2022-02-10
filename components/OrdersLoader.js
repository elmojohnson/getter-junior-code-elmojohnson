import React from "react";

const OrdersLoader = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {[...Array(3)].map((_, index) => {
        return (
          <div className="p-4 bg-slate-200 h-28 rounded-lg animate-pulse" />
        );
      })}
    </div>
  );
};

export default OrdersLoader;

import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import Sidebar from './Sidebar';

const Alerts = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, message: "New Todo Added Successfully!", type: "success" },
    { id: 2, message: "Todo Deleted!", type: "warning" },
  ]);

  const removeAlert = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  return (
    <div className="flex bg-gradient-to-r from-pink-300 to-blue-300 dark:bg-gradient-to-r dark:from-darkGradientStart dark:-darkGradientMiddle dark:to-darkGradientEn">
      
      <Sidebar />

      
      <div className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-6">Alerts</h2>

        {alerts.length === 0 ? (
          <p className="text-gray-500 text-lg">No alerts available.</p>
        ) : (
          alerts.map((alert) => (
            <div
              key={alert.id}
              className={`flex justify-between items-center p-4 mb-4 rounded-lg text-white shadow-lg 
                ${alert.type === "success" ? "bg-green-500" : "bg-yellow-500"}`}
            >
              <span>{alert.message}</span>
              <button onClick={() => removeAlert(alert.id)}>
                <IoClose className="h-6 w-6 hover:text-black transition-all" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Alerts;

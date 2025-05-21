import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../components/Card";
import { DropdownMenu } from "../components/DropdownMenu";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const Dashboard = () => {
  const [sensorData, setSensorData] = useState([]);
  const [humidity, setHumidity] = useState(0);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/sensores")
      .then((response) => {
        setSensorData(response.data);
        if (response.data.length > 0) {
          setHumidity(response.data[0].humidity);
        }
      })
      .catch((error) => {
        console.error("Error fetching sensor data:", error);
      });
  }, []);

  const chartData = [
    { month: "Jan", value: 20 },
    { month: "Feb", value: 30 },
    { month: "Mar", value: 50 },
    { month: "Apr", value: 40 },
    { month: "May", value: 60 },
    { month: "Jun", value: 80 },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <DropdownMenu />
        <input
          type="text"
          placeholder="Search"
          className="border rounded-lg px-3 py-2"
        />
      </div>
      <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2">
        {sensorData.map((sensor, index) => (
          <Card key={index}>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">Humidity Sensor</h3>
                <p className="text-sm">ID: {sensor.id}</p>
                <p className="text-sm">Mac Address: {sensor.mac_address}</p>
                <p className="text-sm text-gray-500">R$ {sensor.price}</p>
              </div>
              <div className="w-1/2">
                <LineChart
                  width={200}
                  height={100}
                  data={chartData}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
              </div>
            </div>
            <div className="mt-4">
              <p>Humidity: {humidity}%</p>
              <div className="h-2 bg-gray-300 rounded-full">
                <div
                  className="h-2 bg-purple-500 rounded-full"
                  style={{ width: `${humidity}%` }}
                ></div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

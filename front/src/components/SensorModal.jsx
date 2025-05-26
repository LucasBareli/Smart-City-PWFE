import React, { useState, useEffect } from "react";

export default function SensorModal({ isOpen, onClose, onSave, sensorData }) {
  const [image, setImage] = useState(sensorData?.image || "");
  const [model, setModel] = useState(sensorData?.model || "");
  const [price, setPrice] = useState(sensorData?.price || "");
  const [status, setStatus] = useState(sensorData?.status || "Active");
  const [macAddress, setMacAddress] = useState(sensorData?.macAddress || "");

  useEffect(() => {
    if (sensorData) {
      setImage(sensorData.image);
      setModel(sensorData.model);
      setPrice(sensorData.price);
      setStatus(sensorData.status);
      setMacAddress(sensorData.macAddress);
    } else {
      setImage("");
      setModel("");
      setPrice("");
      setStatus("Active");
      setMacAddress("");
    }
  }, [sensorData]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!model || !price || !macAddress) {
      alert("Model, Price and Mac-Address are required.");
      return;
    }
    onSave({ image, model, price, status, macAddress });
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[500px] max-w-full">
        <h2 className="text-2xl font-semibold mb-4 league-regular">{sensorData ? "Edit Sensor" : "New Sensor"}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label className="league-regular">
            Image URL:
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full league-regular"
              placeholder="Enter image URL"
            />
          </label>
          <label className="league-regular">
            Model:
            <input
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full league-regular"
              required
            />
          </label>
          <label className="league-regular">
            Price:
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full league-regular"
              required
            />
          </label>
          <label className="league-regular">
            Status:
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full league-regular"
            >
              <option value="Active" className="league-regular cursor-pointer">Active</option>
              <option value="Inactive" className="league-regular cursor-pointer">Inactive</option>
            </select>
          </label>
          <label className="league-regular">
            Mac-Address:
            <input
              type="text"
              value={macAddress}
              onChange={(e) => setMacAddress(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full league-regular"
              required
            />
          </label>
          <div className="flex justify-end space-x-2 !mt-5">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded league-regular w-30 cursor-pointer">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-[#3C096C] text-white rounded league-regular w-30 cursor-pointer">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Form } from "@remix-run/react";

interface ParcelFormProps {
  // Add any props you need here
}

export default function ParcelForm(props: ParcelFormProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleForm = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-6">
      <button
        onClick={toggleForm}
        className="w-full bg-gray-200 p-3 text-left font-semibold flex justify-between items-center"
      >
        Parcel Details
        <span>{isExpanded ? '▲' : '▼'}</span>
      </button>
      {isExpanded && (
        <Form method="post" className="mt-4 p-4 border rounded-b">
          <div className="mb-4">
            <label htmlFor="weight" className="block mb-2">Weight (kg)</label>
            <input type="number" id="weight" name="weight" step="0.1" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="length" className="block mb-2">Length (cm)</label>
            <input type="number" id="length" name="length" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="width" className="block mb-2">Width (cm)</label>
            <input type="number" id="width" name="width" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="height" className="block mb-2">Height (cm)</label>
            <input type="number" id="height" name="height" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="predefinedPackage" className="block mb-2">Predefined Package</label>
            <select
              id="predefinedPackage"
              name="predefinedPackage"
              className="w-full p-2 border rounded"
              onChange={(e) => {
                const [weight, length, width, height] = e.target.value.split(',');
                document.getElementById('weight').value = weight;
                document.getElementById('length').value = length;
                document.getElementById('width').value = width;
                document.getElementById('height').value = height;
              }}
            >
              <option value="">Select a package</option>
              <option value="0.5,25,15,2">Small Envelope (0.5kg, 25x15x2cm)</option>
              <option value="1,30,20,5">Medium Box (1kg, 30x20x5cm)</option>
              <option value="3,40,30,20">Large Box (3kg, 40x30x20cm)</option>
              <option value="5,50,40,30">Extra Large Box (5kg, 50x40x30cm)</option>
            </select>
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Submit Parcel
          </button>
        </Form>
      )}
    </div>
  );
}

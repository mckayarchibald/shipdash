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
            <select id="predefinedPackage" name="predefinedPackage" className="w-full p-2 border rounded">
              <option value="">Select a package</option>
              <option value="small">Small Box (20x15x10 cm)</option>
              <option value="medium">Medium Box (30x25x15 cm)</option>
              <option value="large">Large Box (40x35x20 cm)</option>
              <option value="envelope">Padded Envelope (25x35x2 cm)</option>
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

import React, { useState } from 'react';
import { Form } from "@remix-run/react";

interface Option {
  id: string;
  name: string;
  value: string;
}

const availableOptions: Option[] = [
  { id: '1', name: 'Insurance', value: '' },
  { id: '2', name: 'Express Delivery', value: '' },
  { id: '3', name: 'Signature Required', value: '' },
  { id: '4', name: 'Fragile Handling', value: '' },
  { id: '5', name: 'Gift Wrapping', value: '' },
];

export default function OptionsForm() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const filteredOptions = availableOptions.filter(option =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOptionSelect = (option: Option) => {
    if (!selectedOptions.find(o => o.id === option.id)) {
      setSelectedOptions([...selectedOptions, { ...option, value: '' }]);
    }
  };

  const handleOptionChange = (id: string, value: string) => {
    setSelectedOptions(selectedOptions.map(option =>
      option.id === id ? { ...option, value } : option
    ));
  };

  const handleRemoveOption = (id: string) => {
    setSelectedOptions(selectedOptions.filter(option => option.id !== id));
  };

  const toggleForm = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-6">
      <button
        onClick={toggleForm}
        className="w-full bg-gray-200 p-3 text-left font-semibold flex justify-between items-center"
      >
        Shipping Options
        <span>{isExpanded ? '▲' : '▼'}</span>
      </button>
      {isExpanded && (
        <Form method="post" className="mt-4 p-4 border rounded-b">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search options..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <ul className="mb-4 max-h-40 overflow-y-auto border rounded">
            {filteredOptions.map(option => (
              <li
                key={option.id}
                onClick={() => handleOptionSelect(option)}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                {option.name}
              </li>
            ))}
          </ul>
          {selectedOptions.map(option => (
            <div key={option.id} className="mb-4">
              <label htmlFor={`option-${option.id}`} className="block mb-2">{option.name}</label>
              <div className="flex">
                <input
                  type="text"
                  id={`option-${option.id}`}
                  name={`option-${option.id}`}
                  value={option.value}
                  onChange={(e) => handleOptionChange(option.id, e.target.value)}
                  className="flex-grow p-2 border rounded-l"
                  placeholder={`Enter ${option.name.toLowerCase()} details`}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveOption(option.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-r hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Submit Options
          </button>
        </Form>
      )}
    </div>
  );
}

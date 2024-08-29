import React, { useState } from 'react';
import { Form } from "@remix-run/react";

interface AddressFormProps {
  addressType: 'sender' | 'recipient' | 'return';
}

export default function AddressForm({ addressType }: AddressFormProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleForm = () => {
    setIsExpanded(!isExpanded);
  };

  const capitalizedAddressType = addressType.charAt(0).toUpperCase() + addressType.slice(1);

  return (
    <div className="mb-6">
      <button
        onClick={toggleForm}
        className="w-full bg-gray-200 p-3 text-left font-semibold flex justify-between items-center"
      >
        {capitalizedAddressType} Address
        <span>{isExpanded ? '▲' : '▼'}</span>
      </button>
      {isExpanded && (
        <Form method="post" className="mt-4 p-4 border rounded-b">
          <input type="hidden" name="addressType" value={addressType} />
          <div className="mb-4">
            <label htmlFor={`${addressType}Company`} className="block mb-2">Company</label>
            <input type="text" id={`${addressType}Company`} name="company" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor={`${addressType}Name`} className="block mb-2">Name</label>
            <input type="text" id={`${addressType}Name`} name="name" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor={`${addressType}Street1`} className="block mb-2">Street 1</label>
            <input type="text" id={`${addressType}Street1`} name="Street1" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor={`${addressType}Street2`} className="block mb-2">Street 2</label>
            <input type="text" id={`${addressType}Street2`} name="Street2" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor={`${addressType}City`} className="block mb-2">City</label>
            <input type="text" id={`${addressType}City`} name="city" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor={`${addressType}State`} className="block mb-2">State</label>
            <input type="text" id={`${addressType}State`} name="state" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor={`${addressType}PostalCode`} className="block mb-2">Postal Code</label>
            <input type="text" id={`${addressType}PostalCode`} name="postalCode" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor={`${addressType}Country`} className="block mb-2">Country</label>
            <input type="text" id={`${addressType}Country`} name="country" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor={`${addressType}Email`} className="block mb-2">Email</label>
            <input 
              type="email" 
              id={`${addressType}Email`} 
              name="email" 
              className="w-full p-2 border rounded" 
              required 
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
            />
          </div>
          <div className="mb-4">
            <label htmlFor={`${addressType}Phone`} className="block mb-2">Phone</label>
            <input 
              type="tel" 
              id={`${addressType}Phone`} 
              name="phone" 
              className="w-full p-2 border rounded" 
              required 
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              title="Please enter a valid phone number in the format: 123-456-7890"
              placeholder="123-456-7890"
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                id={`${addressType}IsBusiness`}
                name="isBusiness"
                className="mr-2"
              />
              <span>Is this a business address?</span>
            </label>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Submit {capitalizedAddressType} Address
          </button>
        </Form>
      )}
    </div>
  );
}


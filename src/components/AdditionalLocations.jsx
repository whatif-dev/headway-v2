import React, { useState } from 'react';
import Modal from './Modal';

function AdditionalLocations() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="mt-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Additional locations for telehealth</h2>
          <button className="btn-square btn-secondary" onClick={() => setIsModalOpen(true)}>Add new location</button>
        </div>
        <p className="text-sm text-gray-600 mb-4">We use this info to confirm your provider's license is eligible for each location</p>
        <div className="flex items-start">
          <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div>
            <p className="font-medium">Home</p>
            <p className="text-sm text-gray-600">309 North Sierra Vista Street</p>
            <p className="text-sm text-gray-600">Monterey Park, CA 91755</p>
          </div>
        </div>
        <button className="btn-square btn-danger mt-2">Remove</button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Location">
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Location Name</label>
            <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Street Address</label>
            <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">City</label>
            <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">State</label>
            <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
            <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="btn-square btn-primary">Add Location</button>
          </div>
        </form>
      </Modal>
    </section>
  );
}

export default AdditionalLocations;
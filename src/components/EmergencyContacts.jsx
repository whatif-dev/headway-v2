import React, { useState } from 'react';
import Modal from './Modal';

function EmergencyContacts() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="mt-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Emergency contacts</h2>
          <button className="btn-square btn-secondary" onClick={() => setIsModalOpen(true)}>Add emergency contact</button>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Name</th>
              <th className="text-left">Phone number</th>
              <th className="text-left">Relationship</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sandi Kaw</td>
              <td>(620) 625-3111</td>
              <td>Mother</td>
              <td>
                <button className="btn-square btn-danger">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Emergency Contact">
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone number</label>
            <input type="tel" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Relationship</label>
            <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="btn-square btn-primary">Add Contact</button>
          </div>
        </form>
      </Modal>
    </section>
  );
}

export default EmergencyContacts;
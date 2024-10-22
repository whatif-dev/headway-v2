import React, { useState } from 'react';
import Modal from './Modal';

function Notifications() {
  const [receiveTexts, setReceiveTexts] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = () => {
    setReceiveTexts(!receiveTexts);
  };

  return (
    <section className="mt-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Notifications</h2>
          <button className="btn-square btn-secondary" onClick={() => setIsModalOpen(true)}>Edit</button>
        </div>
        <p className="text-sm mb-4">By turning on alerts, I have reviewed Headway's SMS/Text Message notification terms and expressly consent to receive SMS/Text Messages from Headway.</p>
        <div className="flex items-center justify-between">
          <span>Receive text messages</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={receiveTexts}
              onChange={handleChange}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Mobile number</label>
          <p>(424) 235-8989</p>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Edit Notifications">
        <form>
          <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" checked={receiveTexts} onChange={handleChange} />
              <span>Receive text messages</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Mobile number</label>
            <input type="tel" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" defaultValue="(424) 235-8989" />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="btn-square btn-primary">Save Changes</button>
          </div>
        </form>
      </Modal>
    </section>
  );
}

export default Notifications;
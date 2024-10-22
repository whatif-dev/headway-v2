import React, { useState } from 'react';
import Modal from './Modal';

function Insurance() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [insuranceInfo, setInsuranceInfo] = useState({
    firstName: 'Eric',
    lastName: 'Kaw',
    state: 'California',
    dateOfBirth: '',
    insuranceCompany: '',
    memberId: '',
    groupNumber: ''
  });

  const handleChange = (e) => {
    setInsuranceInfo({ ...insuranceInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    // Here you would typically update the backend with the new information
  };

  return (
    <section className="mt-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Insurance</h2>
          <button className="btn-square btn-secondary" onClick={() => setIsModalOpen(true)}>Add</button>
        </div>
        <h3 className="text-lg font-semibold mb-4">How billing and insurance works</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <svg className="h-6 w-6 text-gray-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <p className="text-sm">After each session, we'll charge your card. This is an estimate based on everything we know about your plan.</p>
          </li>
          <li className="flex items-start">
            <svg className="h-6 w-6 text-gray-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            <p className="text-sm">Your insurer will review your claim. In some rare cases, they may determine that your final cost is different. This can happen if you haven't met your deductible or out-of-pocket maximum. <a href="https://google.com" className="text-blue-600 hover:underline">See why costs can change</a></p>
          </li>
          <li className="flex items-start">
            <svg className="h-6 w-6 text-gray-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm">If you were overcharged, we'll refund the difference. If you were undercharged, we'll email you an explanation and charge your card a few days later.</p>
          </li>
        </ul>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="My Insurance Information">
        <form onSubmit={handleSubmit}>
          <p className="text-sm mb-4">Make sure you enter the details of the person receiving care and that everything matches exactly what is written on the card. At this time, we can only accept primary insurance plans.</p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Patient's legal first name</label>
              <input type="text" name="firstName" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value={insuranceInfo.firstName} onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Patient's legal last name</label>
              <input type="text" name="lastName" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value={insuranceInfo.lastName} onChange={handleChange} />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Where are you located?</label>
            <select name="state" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value={insuranceInfo.state} onChange={handleChange}>
              <option value="California">California</option>
              <option value="New York">New York</option>
              <option value="Texas">Texas</option>
              {/* Add more states as needed */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Patient's date of birth</label>
            <input type="date" name="dateOfBirth" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value={insuranceInfo.dateOfBirth} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Insurance company</label>
            <select name="insuranceCompany" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value={insuranceInfo.insuranceCompany} onChange={handleChange}>
              <option value="">Select an insurance company</option>
              <option value="Aetna">Aetna</option>
              <option value="Blue Cross Blue Shield">Blue Cross Blue Shield</option>
              <option value="Cigna">Cigna</option>
              <option value="UnitedHealthcare">UnitedHealthcare</option>
              {/* Add more insurance companies as needed */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Member ID</label>
            <input type="text" name="memberId" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value={insuranceInfo.memberId} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Group number</label>
            <input type="text" name="groupNumber" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value={insuranceInfo.groupNumber} onChange={handleChange} />
            <p className="text-xs text-gray-500 mt-1">If you don't have a group number, leave this field blank.</p>
          </div>
          <div className="flex justify-end">
            <button type="button" className="btn-square btn-secondary mr-2" onClick={() => setIsModalOpen(false)}>Cancel</button>
            <button type="submit" className="btn-square btn-primary">Continue</button>
          </div>
        </form>
      </Modal>
    </section>
  );
}

export default Insurance;
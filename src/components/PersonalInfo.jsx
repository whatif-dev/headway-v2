import React, { useState } from 'react';
import Modal from './Modal';

function PersonalInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    firstName: 'Eric',
    lastName: 'Kaw',
    legalFirstName: 'Eric',
    legalLastName: 'Kaw',
    pronouns: 'He/Him',
    email: 'eric.kaw@example.com',
    phone: '(424) 235-8989',
    gender: 'Male',
    genderRoles: 'Cisgender',
    ethnicity: 'Asian',
    language: 'English'
  });

  const handleChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
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
          <h2 className="text-xl font-bold">Personal info</h2>
          <button className="btn-square btn-secondary" onClick={() => setIsModalOpen(true)}>Edit</button>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
          <p className="text-sm text-blue-700">Make sure your personal information is accurate ahead of your next session.</p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <p>{personalInfo.firstName}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <p>{personalInfo.lastName}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Legal First Name</label>
              <p>{personalInfo.legalFirstName}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Legal Last Name</label>
              <p>{personalInfo.legalLastName}</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Pronouns</label>
            <p>{personalInfo.pronouns}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p>{personalInfo.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <p>{personalInfo.phone}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <p>{personalInfo.gender}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender Roles</label>
            <p>{personalInfo.genderRoles}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Ethnicity</label>
            <p>{personalInfo.ethnicity}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Language</label>
            <p>{personalInfo.language}</p>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Edit Personal Info">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input type="text" name="firstName" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value={personalInfo.firstName} onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input type="text" name="lastName" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value={personalInfo.lastName} onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Legal First Name</label>
              <input type="text" name="legalFirstName" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value={personalInfo.legalFirstName} onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Legal Last Name</label>
              <input type="text" name="legalLastName" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value={personalInfo.legalLastName} onChange={handleChange} />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Pronouns</label>
            <select name="pronouns" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value={personalInfo.pronouns} onChange={handleChange}>
              <option>He/Him</option>
              <option>She/Her</option>
              <option>They/Them</option>
              <option>Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value={personalInfo.email} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input type="tel" name="phone" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value={personalInfo.phone} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select name="gender" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value={personalInfo.gender} onChange={handleChange}>
              <option>Male</option>
              <option>Female</option>
              <option>Non-binary</option>
              <option>Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Gender Roles</label>
            <select name="genderRoles" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value={personalInfo.genderRoles} onChange={handleChange}>
              <option>Cisgender</option>
              <option>Transgender</option>
              <option>Non-conforming</option>
              <option>Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Ethnicity</label>
            <select name="ethnicity" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value={personalInfo.ethnicity} onChange={handleChange}>
              <option>Asian</option>
              <option>Black or African American</option>
              <option>Hispanic or Latino</option>
              <option>White</option>
              <option>Native American</option>
              <option>Pacific Islander</option>
              <option>Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Language</label>
            <select name="language" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value={personalInfo.language} onChange={handleChange}>
              <option>English</option>
              <option>Spanish</option>
              <option>Mandarin</option>
              <option>French</option>
              <option>Other</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="btn-square btn-primary">Save Changes</button>
          </div>
        </form>
      </Modal>
    </section>
  );
}

export default PersonalInfo;
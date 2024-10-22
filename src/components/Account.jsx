import React from 'react';
import PreparationSection from './PreparationSection';
import PersonalInfo from './PersonalInfo';
import Insurance from './Insurance';
import Notifications from './Notifications';
import Forms from './Forms';
import EmergencyContacts from './EmergencyContacts';
import AdditionalLocations from './AdditionalLocations';
import Login from './Login';

function Account() {
  return (
    <div className="space-y-8">
      <PreparationSection />
      <PersonalInfo />
      <Insurance />
      <Notifications />
      <Forms />
      <EmergencyContacts />
      <AdditionalLocations />
      <Login />
    </div>
  );
}

export default Account;
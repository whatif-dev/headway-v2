import React from 'react';

function Forms() {
  return (
    <section className="mt-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Forms</h2>
        <h3 className="text-lg font-semibold mb-4">Requested by Headway</h3>
        <ul className="space-y-4">
          <li className="flex justify-between items-center">
            <div>
              <p className="font-medium">Privacy notice (Headway)</p>
              <p className="text-sm text-gray-600">Accepted on 05/08/2024</p>
            </div>
            <button className="btn-square btn-secondary">View</button>
          </li>
          <li className="flex justify-between items-center">
            <div>
              <p className="font-medium">Consent forms (Headway)</p>
              <p className="text-sm text-gray-600">Accepted on 05/08/2024</p>
            </div>
            <button className="btn-square btn-secondary">View</button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Forms;
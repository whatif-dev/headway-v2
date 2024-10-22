import React, { useState } from 'react';

function PreparationSection() {
  const [checkedItems, setCheckedItems] = useState({
    insurance: false,
    payment: true,
  });

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <section className="mt-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Prepare for your sessions</h2>
        <h3 className="text-lg font-semibold mb-4">Intake tasks</h3>
        <p className="text-sm text-gray-600 mb-4">Complete these tasks to get ready for your sessions</p>
        <ul className="space-y-4">
          <li className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="insurance"
                name="insurance"
                className="mr-3"
                checked={checkedItems.insurance}
                onChange={handleChange}
              />
              <label htmlFor="insurance">Insurance</label>
            </div>
            <button className="btn-square btn-primary">Add</button>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="payment"
                name="payment"
                className="mr-3"
                checked={checkedItems.payment}
                onChange={handleChange}
              />
              <label htmlFor="payment">Payment method</label>
            </div>
            <button className="btn-square btn-primary">Update</button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default PreparationSection;
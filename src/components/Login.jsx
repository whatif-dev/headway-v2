import React from 'react';

function Login() {
  return (
    <section className="mt-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <div className="flex justify-between items-center">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <button className="btn-square btn-secondary">Update password</button>
        </div>
        <input type="password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value="••••••••" readOnly />
      </div>
    </section>
  );
}

export default Login;
import React from 'react';

function Properties() {
  return (
    <div className="bg-gray-200 p-4 rounded">
      <div className="mb-2">Properties</div>
      <div className="space-y-2">
        <div>
          <label>Max Response</label>
          <input type="text" className="w-full border rounded" />
        </div>
        <div>
          <label>Temperature</label>
          <input type="text" className="w-full border rounded" />
        </div>
        <div>
          <label>Top P</label>
          <input type="text" className="w-full border rounded" />
        </div>
      </div>
    </div>
  );
}

export default Properties;

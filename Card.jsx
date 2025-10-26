import React from 'react';

export default function Card({ title, children }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
}

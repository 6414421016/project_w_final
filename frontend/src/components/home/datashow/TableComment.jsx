import React from 'react'

export default function TableComment({data}) {
  return (
    <div className="overflow-y-auto max-h-60">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">body</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm font-light">
          {data.map((val, key) => (
            <tr className="border-b border-gray-200" key={key}>
              <td className="py-3 px-6 text-left">{val.name}</td>
              <td className="py-3 px-6 text-left">{val.email}</td>
              <td className="py-3 px-6 text-left">{val.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

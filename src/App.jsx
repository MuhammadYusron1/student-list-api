import { useState } from 'react';

export default function App() {
  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-start">Name</th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-start">Age</th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-start">Address</th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase text-end">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200">John Brown</td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">45</td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">New York No. 1 Lake Park</td>
                  <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-end">
                    <button type="button" className="inline-flex items-center text-sm font-semibold text-blue-600 border border-transparent rounded-lg gap-x-2 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Delete</button>
                  </td>
                </tr>

                <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200">Jim Green</td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">27</td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">London No. 1 Lake Park</td>
                  <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-end">
                    <button type="button" className="inline-flex items-center text-sm font-semibold text-blue-600 border border-transparent rounded-lg gap-x-2 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Delete</button>
                  </td>
                </tr>

                <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200">Joe Black</td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">31</td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">Sidney No. 1 Lake Park</td>
                  <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-end">
                    <button type="button" className="inline-flex items-center text-sm font-semibold text-blue-600 border border-transparent rounded-lg gap-x-2 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Delete</button>
                  </td>
                </tr>

                <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200">Edward King</td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">16</td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">LA No. 1 Lake Park</td>
                  <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-end">
                    <button type="button" className="inline-flex items-center text-sm font-semibold text-blue-600 border border-transparent rounded-lg gap-x-2 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Delete</button>
                  </td>
                </tr>

                <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200">Jim Red</td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">45</td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">Melbourne No. 1 Lake Park</td>
                  <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-end">
                    <button type="button" className="inline-flex items-center text-sm font-semibold text-blue-600 border border-transparent rounded-lg gap-x-2 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
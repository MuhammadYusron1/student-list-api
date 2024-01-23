import { useState, useEffect } from 'react';
import { STUDENTS } from './students.js';
import axios from "axios";

function StudentRow({student}) {

  return (
    <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700">
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">{student.name}</td>
      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200">{student.studentID}</td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">{student.age}</td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">{student.sex}</td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">{student.address}</td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">{student.subject}</td>
    </tr>
  );
}

function StudentTable({students}) {
  const [studs, setStuds] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const config = {
          url: '/',
          method: 'get',
          baseURL: 'http://localhost:5000/api/students',
      };
        const res = await axios(config);
        setStuds(res.data);
        // console.log(res.data);

      } catch (err) {
        if (err.res) {
          // Not in the 200 response range 
          throw new Error(err.res.data, err.res.status, err.res.headers);
        } else {
          throw new Error(err.stack);
        }
      }
    }

    fetchPosts();
  }, [])

  console.log(studs);

  const rows = [];

  studs.forEach((student) => {
    rows.push(
      <StudentRow key={student._id} student={student} />
    );
  });

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-4 text-xs font-medium text-gray-500 uppercase text-start">Name</th>
                  <th scope="col" className="px-6 py-4 text-xs font-medium text-gray-500 uppercase text-start">Student Id</th>
                  <th scope="col" className="px-6 py-4 text-xs font-medium text-gray-500 uppercase text-start">Age</th>
                  <th scope="col" className="px-6 py-4 text-xs font-medium text-gray-500 uppercase text-start">Sex</th>
                  <th scope="col" className="px-6 py-4 text-xs font-medium text-gray-500 uppercase text-start">Address</th>
                  <th scope="col" className="px-6 py-4 text-xs font-medium text-gray-500 uppercase text-start">Subject</th>
                </tr>
              </thead>
              <tbody>
                {rows}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <!-- Pagination --> */}
      <nav className="flex items-center justify-end gap-x-1">
        <button type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
          <i className="fa-solid fa-angle-left fa-sm"></i>
          <span aria-hidden="true" className="sr-only">Previous</span>
        </button>
        <div className="flex items-center gap-x-1">
          <span className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:focus:bg-white/10">1</span>
          <span className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-gray-500">of</span>
          <span className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-gray-500">3</span>
        </div>
        <button type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
          <span aria-hidden="true" className="sr-only">Next</span>
          <i className="fa-solid fa-angle-right fa-sm"></i>
        </button>
      </nav>
      {/* <!-- End Pagination --> */}
    </div>
  );
}

function FilterableStudentTable({students}) {
  return (
    <>
      <StudentTable students={students} />
    </>
  )
}

export default function App() {
  return <FilterableStudentTable students={STUDENTS} />;
}
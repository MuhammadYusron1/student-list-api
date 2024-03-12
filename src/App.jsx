import { useState, useEffect } from 'react';
import AddStudentForm from './components/AddStudentForm.jsx';
import Selection from './components/EditSelection.jsx';
import DeleteSeveralStudents from './components/DeleteSeveralStudents.jsx';
import Pagination from './Pagination.jsx';
import axios from "axios";

function StudentRow({student, active, onActiveChange, stdID, onStdIDChange, handleDelete, handleEdit, editActive, onEditActiveChange, putName, setPutName, putStudentID, setPutStudentID, putAge, setPutAge, putSex, setPutSex, putAddress, setPutAddress, putSubject, setPutSubject}) {
  function handleEditSelection() {
    onEditActiveChange({...editActive, editSelection: !editActive.editSelection}); // toggle selection on/off
    onStdIDChange(student._id); // set current unique student id to its unique stdent id
  }

  return (
    <tr className="even:bg-white odd:bg-gray-100 hover:bg-gray-200 dark:even:bg-gray-800 dark:odd:bg-gray-700 dark:hover:bg-gray-700">
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">{student.name}</td>
      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200">{student.studentID}</td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">{student.age}</td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">{student.sex}</td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">{student.address}</td>
      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">{student.subject}</td>
      <td className="relative px-6 py-4 text-sm text-gray-800 whitespace-nowrap dark:text-gray-200">
        <Selection active={active} onActiveChange={onActiveChange} editActive={editActive} onEditActiveChange={onEditActiveChange} handleDelete={handleDelete} handleEdit={handleEdit} stdID={stdID} student_ID={student._id}
         putName={putName} setPutName={setPutName} putStudentID={putStudentID} setPutStudentID={setPutStudentID} putAge={putAge} setPutAge={setPutAge} putSex={putSex} setPutSex={setPutSex} putAddress={putAddress} setPutAddress={setPutAddress} putSubject={putSubject} setPutSubject={setPutSubject} />
        <button onClick={handleEditSelection}><i className="fa-solid fa-ellipsis fa-lg"></i></button>
      </td>
    </tr>
  );
}

function StudentTable({ children, filterText, active, onActiveChange }) {
  const [editActive, setEditActive] = useState({ 
    editSelection: true,          // toggle selection on&off
    editSelectionClose: false,
	});
  const [studs, setStuds] = useState([]);   // List of all students
  const [stdID, setStdID] = useState('');   // Variable of student unique ID
  const [currentPage, setCurrentPage] = useState(1);    // Page of current pagination
  const [studentsPerPage, setStudentsPerPage] = useState(10);    // Number of students per page
  // Edit / put / update student variables
  const [putName, setPutName] = useState('');
  const [putStudentID, setPutStudentID] = useState('');
  const [putAge, setPutAge] = useState('');
  const [putSex, setPutSex] = useState('M');
  const [putAddress, setPutAddress] = useState('');
  const [putSubject, setPutSubject] = useState('Engineering');

  // Fetch data from backend
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

  // Edit student list
  const handleEdit = async (e) => {
    // e.preventDefault();
    try {
      const config = {
        url: `/update/${stdID}`,
        method: 'put',
        baseURL: 'http://localhost:5000/api/students',
        data: {
          name: putName,
          studentID: putStudentID,
          age: putAge,
          sex: putSex,
          address: putAddress,
          subject: putSubject,
        },
      };
      const res = await axios(config);
      console.log(res.data);
    } catch (err) {
      throw new Error(err.stack);
    }
  }

  // Delete student list
  const handleDelete = async (e) => {
    // e.preventDefault();
    try {
      const config = {
        url: `/delete/${stdID}`,
        method: 'delete',
        baseURL: 'http://localhost:5000/api/students',
      };
      const res = await axios(config);
      console.log(res.data);
    } catch (err) {
      throw new Error(err.stack);
    }
  };

  // Get current students
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = studs.slice(indexOfFirstStudent, indexOfLastStudent);

  const rows = [];

  currentStudents.forEach((student) => {
    // search for student's name, ID
    if ((student.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) && (student.studentID.toLowerCase().indexOf(filterText.toLowerCase()) === -1)) {
      return;
    }

    rows.push(
      <StudentRow key={student._id} student={student} active={active} onActiveChange={onActiveChange} handleDelete={handleDelete} handleEdit={handleEdit} stdID={stdID} onStdIDChange={setStdID} editActive={editActive} onEditActiveChange={setEditActive}
      putName={putName} setPutName={setPutName} putStudentID={putStudentID} setPutStudentID={setPutStudentID} putAge={putAge} setPutAge={setPutAge} putSex={putSex} setPutSex={setPutSex} putAddress={putAddress} setPutAddress={setPutAddress} putSubject={putSubject} setPutSubject={setPutSubject} />
    );
  });

  return (
    <>
      {/* Table Title Starts Here*/}
      {children}
      {/* Table Title Ends Here*/}
      <div className="flex flex-col">
        <div className="w-full overflow-x-auto"> {/* block w-full overflow-x-auto */}
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              {/* Table Starts Here */}
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th scope="col" className="px-6 py-4 text-xs font-medium text-gray-500 uppercase text-start">Name</th>
                    <th scope="col" className="px-6 py-4 text-xs font-medium text-gray-500 uppercase text-start">Student Id</th>
                    <th scope="col" className="px-6 py-4 text-xs font-medium text-gray-500 uppercase text-start">Age</th>
                    <th scope="col" className="px-6 py-4 text-xs font-medium text-gray-500 uppercase text-start">Sex</th>
                    <th scope="col" className="px-6 py-4 text-xs font-medium text-gray-500 uppercase text-start">Address</th>
                    <th scope="col" className="px-6 py-4 text-xs font-medium text-gray-500 uppercase text-start">Subject</th>
                    <th scope="col" className="px-6 py-4 text-xs font-medium text-gray-500 uppercase text-start"></th>
                  </tr>
                </thead>
                <tbody>
                  {rows}
                </tbody>
              </table>
              {/* Table Ends Here */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Pagination --> */}
      <Pagination currentPage={currentPage} studentsPerPage={studentsPerPage} students={studs} setCurrentPage={setCurrentPage} setStudentsPerPage={setStudentsPerPage} currentStudents={currentStudents}/>
      {/* <!-- End Pagination --> */}
    </>
  );
}

function SearchBar({filterText, onFilterTextChange, active, onActiveChange}) {
  return (
    <div className='bg-[#435d7d] text-white min-w-full rounded-b-none rounded-t py-4 px-8'>
      <div className='flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4'> {/* flex flex-row flex-wrap items-stretch justify-between content-stretch */}
        <div className='self-auto order-none block px-2 grow-0 shrink basis-auto'>
          <h2 className='text-[24px] font-bold capitalize'>manage students</h2>
        </div>
        {/* The searchbar */}
        <form className='self-auto order-none block w-3/6 px-2 grow-0 shrink basis-auto' onSubmit={e => e.preventDefault()}>   
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3"> {/* <!-- Magnifier icon --> */}
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input type="search" id="default-search" value={filterText} onChange={e => onFilterTextChange(e.target.value)} className="block w-full p-4 text-xs text-gray-900 border border-gray-300 rounded-lg md:text-sm ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for student's name or ID..." />
            {/* <button type='submit' className="text-white absolute end-2.5 bottom-2.5 bg-[#435d7d] hover:bg-[#2b415b] transition-all duration-100 ease-linear focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}    {/*Search button*/}
          </div>
        </form>
        <div className='block grow-0 shrink basis-auto self-auto order-none px-2 text-[24px]'>
          <span className='inline-block float-right text-sm font-normal text-center align-middle rounded-sm min-w-16'>
            {/* <button onClick={() => onActiveChange({...active, deleteSeveral: !active.deleteSeveral})} className='capitalize ml-4 px-3 py-1.5 bg-red-600 hover:bg-red-700 transition-all duration-100 ease-linear'><i className="fa-solid fa-circle-minus"></i> delete selected</button> */}
            <button onClick={() => onActiveChange({...active, add: !active.add})} className='capitalize ml-4 px-3 py-1.5 bg-green-600 hover:bg-green-700 transition-all duration-100 ease-linear'><i className="fa-solid fa-circle-plus"></i> add new student</button>
          </span>
        </div>
      </div>
    </div>  
  );
}

function FilterableStudentTable() {
  const [filterText, setFilterText] = useState('');
  const [active, setActive] = useState({
		add: true,
		addClose: false,
    edit: true,
    editClose: false,
    delete: true,
    deleteClose: false,
    deleteSeveral: true,
    deleteSeveralClose: false,
	});
  // Add / post student variables
  const [postName, setPostName] = useState('');
  const [postStudentID, setPostStudentID] = useState('');
  const [postAge, setPostAge] = useState('');
  const [postSex, setPostSex] = useState('M');
  const [postAddress, setPostAddress] = useState('');
  const [postSubject, setPostSubject] = useState('Engineering');

  // Add student list
  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const config = {
        url: '/set',
        method: 'post',
        baseURL: 'http://localhost:5000/api/students',
        data: {
          name: postName,
          studentID: postStudentID,
          age: postAge,
          sex: postSex,
          address: postAddress,
          subject: postSubject,
        },
      };
      const res = await axios(config);
      console.log(res.data);
    } catch (err) {
      throw new Error(err.stack);
    }
  };

  return (
    <StudentTable filterText={filterText} active={active} onActiveChange={setActive} > 
      <SearchBar filterText={filterText} onFilterTextChange={setFilterText} 
                  active={active} onActiveChange={setActive} />
      {/* <DeleteSeveralStudents active={active} onActiveChange={setActive} /> */}
      <AddStudentForm active={active} onActiveChange={setActive} handleSubmit={handleSubmit}
       postName={postName} setPostName={setPostName} postStudentID={postStudentID} setPostStudentID={setPostStudentID} postAge={postAge} setPostAge={setPostAge} 
       postSex={postSex} setPostSex={setPostSex} postAddress={postAddress} setPostAddress={setPostAddress} postSubject={postSubject} setPostSubject={setPostSubject} /> 
    </StudentTable>
  )
}

export default function App() {
  return <FilterableStudentTable />;
}
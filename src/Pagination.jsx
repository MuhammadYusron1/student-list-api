import { useState } from "react";

export default function Pagination({currentPage, students, studentsPerPage, setCurrentPage, currentStudents, setStudentsPerPage}) {
	// Change page
  const totalPages = Math.ceil(students.length / studentsPerPage);
  function handlePageUp() {             // a function to increment current page
    if (currentPage >= totalPages){
      setCurrentPage(1);
    }
    else {
      setCurrentPage(currentPage + 1);
    }
  }
  function handlePageDown() {           // a function to decrement current page
    if (currentPage <= 1){
      setCurrentPage(totalPages);
    }
    else {
      setCurrentPage(currentPage - 1);
    }
  }

	return(
		<>
			<div className='flex items-center justify-end gap-x-1'>Showing<span> {currentStudents.length} </span>of<span> {students.length} </span>records</div>
      <nav className="flex items-center justify-end gap-x-1">
        <div>
          <span>Show</span>
          <select value={studentsPerPage} onChange={(e) => setStudentsPerPage(e.target.value)}>
            <option value='10'>10</option>
            <option value='25'>25</option>
            <option value='50'>50</option>
            <option value='100'>100</option>
          </select>
          <span>per page</span>
        </div>
        <button onClick={handlePageDown} type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
          <i className="fa-solid fa-angle-left fa-sm"></i>
          <span aria-hidden="true" className="sr-only">Previous</span>
        </button>
        <div className="flex items-center gap-x-1">
          <span className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:focus:bg-white/10">{currentPage}</span>
          <span className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-gray-500">of</span>
          <span className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-gray-500">{totalPages}</span>
        </div>
        <button onClick={handlePageUp} type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
          <span aria-hidden="true" className="sr-only">Next</span>
          <i className="fa-solid fa-angle-right fa-sm"></i>
        </button>
      </nav>
		</>
	)
}
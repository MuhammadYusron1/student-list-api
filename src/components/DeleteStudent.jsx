import { useState, useEffect } from 'react';

export default function DeleteStudent({active, onActiveChange}){
	
	return(
		<div className={active.delete ? 'fixed top-0 left-0 z-50 block w-full h-full max-h-screen overflow-x-hidden overflow-y-auto transition-all duration-100 ease-linear outline-0 invisible' : 'fixed top-0 left-0 z-50 block w-full h-full max-h-screen overflow-x-hidden overflow-y-auto transition-all duration-100 ease-linear outline-0 visible'}>
			<div className='relative w-auto max-w-md pointer-events-none sm:my-7 sm:mx-auto'>
				<div className='relative flex flex-col w-full bg-white border border-solid rounded pointer-events-auto border-black/20 bg-clip-padding outline-0'>
					<form onSubmit={e => e.preventDefault()}>
						{/* Modal Header */}
						<div className='flex items-start justify-between px-8 py-5 border-b border-solid border-[#dee2e6]'>
							<h4 className='inline-block mb-0 text-[1.5rem]/[1.5] font-medium capitalize mt-0 text-[#566787]'>delete employee</h4>
							<button onClick={() => onActiveChange({...active, delete: !active.deleteClose})} className='px-4 py-4 ml-auto -my-4 -mr-4'><i className="fa-solid fa-xmark fa-lg"></i></button>
						</div>
						{/* Modal Body */}
						<div className='relative px-8 py-5'>
							<p className='mt-0 mb-4'>Are you sure you want to delete these Records?</p>
							<p className='mt-0 mb-4 text-[#ffc107] text-[80%]'>This action cannot be undone</p>
						</div>
						{/* Modal Footer */}
						<div className='flex px-8 py-5 bg-[#ecf0f1] flex-wrap items-center justify-end border-t border-solid border-[#dee2e6] '>	
							<button onClick={() => onActiveChange({...active, delete: !active.deleteClose})} className="m-1 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button>
							<button className="m-1 text-white bg-[#c82333] hover:bg-[#dc3748] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
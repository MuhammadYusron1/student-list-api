import { useState, useEffect } from 'react';

export default function AddStudentForm({active, onActiveChange}){
	
	return(
		<div className={active.add ? 'fixed top-0 left-0 z-50 block w-full h-full max-h-screen overflow-x-hidden overflow-y-auto transition-all duration-100 ease-linear outline-0 invisible' : 'fixed top-0 left-0 z-50 block w-full h-full max-h-screen overflow-x-hidden overflow-y-auto transition-all duration-100 ease-linear outline-0 visible'}>
			<div className='relative w-auto max-w-md pointer-events-none sm:my-7 sm:mx-auto'>
				<div className='relative flex flex-col w-full bg-white border border-solid rounded pointer-events-auto border-black/20 bg-clip-padding outline-0'>
					<form>
						{/* Modal Header */}
						<div className='flex items-start justify-between px-8 py-5 border-b border-solid border-[#dee2e6]'>
							<h4 className='inline-block mb-0 text-[1.5rem]/[1.5] font-medium capitalize mt-0 text-[#566787]'>add student</h4>
							<button onClick={() => onActiveChange({...active, add: !active.addClose})} className='px-4 py-4 ml-auto -my-4 -mr-4'><i className="fa-solid fa-xmark fa-lg"></i></button>
						</div>
						{/* Modal Body */}
						<div className='relative px-8 py-5'>
							<div className='mb-4'>
								<label className='inline-block mb-2 capitalize'>name</label>
								<input className='block w-full h-[calc(1.5em+.75em+2px)] text-base font-normal text-[#495057] bg-white bg-clip-padding border border-solid border-[#ced4da] py-1.5 px-3 focus:outline-0' type='text' required></input>
							</div>
							<div className='mb-4'>
								<label className='inline-block mb-2 capitalize'>student ID</label>
								<input className='block w-full h-[calc(1.5em+.75em+2px)] text-base font-normal text-[#495057] bg-white bg-clip-padding border border-solid border-[#ced4da] py-1.5 px-3 focus:outline-0' type='text' required></input>
							</div>
							<div className='mb-4'>
								<label className='inline-block mb-2 capitalize'>age</label>
								<input className='block w-full h-[calc(1.5em+.75em+2px)] text-base font-normal text-[#495057] bg-white bg-clip-padding border border-solid border-[#ced4da] py-1.5 px-3 focus:outline-0' type='number' min='15' max='63' required></input>
							</div>
							<div className='mb-4'>
								<label className='inline-block mb-2 capitalize'>sex</label>
								<select className='block w-full h-[calc(1.5em+.75em+2px)] text-base font-normal text-[#495057] bg-white bg-clip-padding border border-solid border-[#ced4da] py-1.5 px-3 focus:outline-0' required>
									<option value="M" >Male</option>
									<option value="F" >Female</option>
								</select>
							</div>
							<div className='mb-4'>
								<label className='inline-block mb-2 capitalize'>address</label>
								<textarea className='block w-full h-auto resize-y text-base font-normal text-[#495057] bg-white bg-clip-padding border border-solid border-[#ced4da] py-1.5 px-3 focus:outline-0' type='text' required></textarea>
							</div>
							<div className='mb-4'>
								<label className='inline-block mb-2 capitalize'>subject</label>
								<select className='block w-full h-[calc(1.5em+.75em+2px)] text-base font-normal text-[#495057] bg-white bg-clip-padding border border-solid border-[#ced4da] py-1.5 px-3 focus:outline-0' required>
									<option value="Engineering">Engineering</option>
									<option value="Math">Math</option>
									<option value="Law">Law</option>
									<option value="History">History</option>
									<option value="Art">Art</option>
									<option value="Accounting">Accounting</option>
									<option value="Science">Science</option>
								</select>
							</div>
						</div>
						{/* Modal Footer */}
						<div className='flex px-8 py-5 bg-[#ecf0f1] flex-wrap items-center justify-end border-t border-solid border-[#dee2e6] '>	
							<button onClick={() => onActiveChange({...active, add: !active.addClose})} className="m-1 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button>
							<button className="m-1 text-white bg-[#28a745] hover:bg-[#4ca361] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
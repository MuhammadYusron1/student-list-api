import EditStudentForm from './EditStudentForm.jsx';
import DeleteStudent from './DeleteStudent.jsx';

export default function Selection({active, onActiveChange, editActive, onEditActiveChange, handleDelete, handleEdit, putName, setPutName, putStudentID, setPutStudentID, putAge, setPutAge, putSex, setPutSex, putAddress, setPutAddress, putSubject, setPutSubject}) {

	return (
		<div className={editActive.editSelection ? "z-50 invisible bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-[17px] right-auto bottom-auto left-[-156px]" : "z-50 visible bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-[17px] right-auto bottom-auto left-[-156px]"}>
			<div className="py-1 text-sm">
				<div>
					<button onClick={() => onActiveChange({...active, edit: !active.edit})} className="flex items-center w-full px-4 py-2 text-gray-700 capitalize hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white dark:text-gray-200">
						<i className="pr-2 fa-solid fa-pen-to-square"></i>
						edit
					</button>
				</div>
				<div>
					<button onClick={() => onActiveChange({...active, delete: !active.delete})} className="flex items-center w-full px-4 py-2 text-red-500 capitalize hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-red-400">
						<i className="pr-2 text-red-500 fa-solid fa-trash-can"></i>
						delete
					</button>
				</div>
			</div>

			<EditStudentForm active={active} onActiveChange={onActiveChange} handleEdit={handleEdit}
			putName={putName} setPutName={setPutName} putStudentID={putStudentID} setPutStudentID={setPutStudentID} putAge={putAge} setPutAge={setPutAge} putSex={putSex} setPutSex={setPutSex} putAddress={putAddress} setPutAddress={setPutAddress} putSubject={putSubject} setPutSubject={setPutSubject} />
			<DeleteStudent active={active} onActiveChange={onActiveChange} handleDelete={handleDelete} />
		</div>
	);
}
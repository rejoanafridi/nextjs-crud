import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Modal from "./Modal";
import { useState } from "react";
import { deleteTodo, editTodo } from "../../api";
import { useRouter } from "next/navigation";
const Task = ({ todo }) => {
	const router = useRouter();
	const [modalOpen, setModalOpen] = useState(false);
	const [openModalDelete, setOpenModalDelete] = useState(false);
	const [taskValue, setTaskValue] = useState(todo.text);
	const handleFormSubmit = async (e) => {
		e.preventDefault();
		await editTodo({
			id: todo.id,
			text: taskValue,
		});
		setTaskValue("");
		setModalOpen(false);
		router.refresh();
	};

	const deleteHandler = (id) => {
		deleteTodo(id);
		setOpenModalDelete(false);
		router.refresh();
	};

	return (
		<>
			<AiOutlineEdit
				cursor="pointer"
				className="text-blue-500"
				size={25}
				onClick={() => setModalOpen(true)}
			/>
			<Modal setModalOpen={setModalOpen} modalOpen={modalOpen}>
				<form onSubmit={handleFormSubmit}>
					<h3 className="font-bold text-lg"> Edit task </h3>
					<div className="modal-action">
						<input
							type="text"
							placeholder="Type here"
							value={taskValue}
							onChange={(e) => {
								setTaskValue(e.target.value);
							}}
							className="input input-bordered input-primary w-full "
						/>
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</div>
				</form>
			</Modal>

			<AiOutlineDelete
				onClick={() => setOpenModalDelete(true)}
				cursor="pointer"
				className="text-red-500"
				size={25}
			/>
			<Modal setModalOpen={setOpenModalDelete} modalOpen={openModalDelete}>
				<h3>Are you sure you want to delete this!</h3>
				<button
					className="btn bg-red-500 text-white"
					onClick={() => deleteHandler(todo.id)}
				>
					{" "}
					Yes
				</button>
			</Modal>
		</>
	);
};

export default Task;

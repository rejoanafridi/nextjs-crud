import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { useState } from "react";
import { addTodo } from "../../api";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
const AddTask = () => {
	const router = useRouter();
	const [modalOpen, setModalOpen] = useState(false);
	const [taskValue, setTaskValue] = useState("");
	const handleFormSubmit = async (e) => {
		e.preventDefault();
		await addTodo({
			id: uuidv4(),
			text: taskValue,
		});
		setTaskValue("");
		router.reload();
	};
	
	return (
		<>
			<button
				className="btn btn-primary w-full bg-slate-500"
				onClick={() => setModalOpen(true)}
			>
				Add Task <AiOutlinePlus className="ml-3" size={20} />
			</button>
			<Modal setModalOpen={setModalOpen} modalOpen={modalOpen}>
				<form onSubmit={handleFormSubmit}>
					<h3 className="font-bold text-lg"> Add new task </h3>
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
		</>
	);
};

export default AddTask;

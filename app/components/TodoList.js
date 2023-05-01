"use client";

import { useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Modal from "./Modal";
import Task from "./Task";
const TodoList = ({ todo }) => {
	return (
		<div className="overflow-x-auto">
			<table className="table w-full">
				{/* head */}
				<thead>
					<tr>
						<th>Name</th>

						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{/* row 1 */}
					{todo.map((td) => (
						<tr key={td.id}>
							<td>{td.text}</td>

							<td>
								<div className="flex gap-5">
									<Task todo={td} />
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TodoList;

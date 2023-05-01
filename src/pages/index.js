import Image from "next/image";
import { Inter } from "next/font/google";
import AddTask from "../../app/components/AddTask";
import TodoList from "../../app/components/TodoList";
import { getAllTodos } from "../../api";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [todo, setTodo] = useState([]);
	useEffect(() => {
		const getData = async () => {
			const task = await getAllTodos();
			setTodo(task);
		};
		getData();
	}, []);

	return (
		<main className="max-w-4xl mx-auto mt-4">
			<div className="text-center my-5 flex flex-col gap-4">
				<h1 className="text-2xl font-bold">Todo List APP</h1>
				<AddTask />
			</div>

			<TodoList todo={todo} />
		</main>
	);
}

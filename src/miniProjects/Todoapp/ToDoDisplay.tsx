import { useState, FormEvent } from "react";
import Button from "../../common/Button";

const ToDoDisplay = () => {
	const [toDos, setToDos] = useState<string[]>([]);
	const [newItem, setNewItem] = useState("");

	function addToDos(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (newItem.trim().length > 0) {
			setToDos([...toDos, newItem]);
			setNewItem("");
		} else {
			alert("Please enter a non-empty value.");
		}
	}

	function handleChangeText(e: React.ChangeEvent<HTMLInputElement>) {
		setNewItem(e.target.value);
	}

	function deleteToDo(index: number) {
		const filteredToDos = toDos.filter((_, i) => i !== index);
		setToDos(filteredToDos);
	}

	return (
		<div className="pl-6 pt-5">
			<form
				id="toDoForm"
				className="flex flex-col text-3xl w-1/2"
				onSubmit={addToDos}
			>
				<label className="text-xl font-medium" htmlFor="item">
					New Item
				</label>
				<input
					value={newItem}
					onChange={handleChangeText}
					className="border-4 rounded-md text-sm md:text-base lg:text-lg w-full md:w-3/4 lg:w-1/2"
					type="text"
					id="item"
				/>
			</form>
			<Button form="toDoForm" type="submit" text="Add" />
			<ul>
				{toDos.map(function (toDo, index) {
					return (
						<li key={index}>
							<input type="checkbox" />
							<label className="m-2 text-xl">{toDo}</label>
							<Button
								size="sm"
								additionalClasses="bg-red-500"
								text="Delete"
								onClick={() => deleteToDo(index)}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ToDoDisplay;

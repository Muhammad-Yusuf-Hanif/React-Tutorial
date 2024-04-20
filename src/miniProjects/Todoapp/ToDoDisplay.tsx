import { useState } from "react";
import Button from "../../common/Button";

const ToDoDisplay = () => {
	const [toDos, setToDos] = useState<string[]>([]);
	const [newItem, setNewItem] = useState("");

  function addToDos(e) {
    e.preventDefault();
    // Trim the newItem and check if it's not empty before adding
    if (newItem.trim().length > 0) {
        setToDos([...toDos, newItem]);
        setNewItem(""); // Reset newItem to clear the input field.
    } else {
        alert("Please enter a non-empty value."); // Optionally alert the user
    }
}


	function handleChangeText(e) {
		setNewItem(e.target.value);
	}

	function deleteToDo(index) {
		const filteredToDos = toDos.filter((_, i) => i !== index);
		setToDos(filteredToDos);
	}

	// console.log("toDos", toDos);
	return (
		<div className="pl-6 pt-5">
			<form
				id="toDoForm"
				className=" flex flex-col text-3xl w-1/2"
				onSubmit={addToDos}
			>
				<label className="text-xl font-medium" htmlFor="item">
					New Item
				</label>
				<input
					value={newItem}
					onChange={handleChangeText}
					className="border-4 rounded-md"
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

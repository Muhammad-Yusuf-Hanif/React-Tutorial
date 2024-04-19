import { useState } from "react";
import Button from "../../common/Button";

const ToDoDisplay = () => {
  const [toDos, setToDos] = useState<string[]>([])
  const [newItem, setNewItem] = useState("")
  
function addToDos(e) {
  // setToDos()
  e.preventDefault()
}

function handleChangeText(e) {
  setNewItem(e.target.value)
}

console.log('newItem', newItem)
	return (
		<div className="pl-6 pt-5">
			<form id="toDoForm" className=" flex flex-col text-3xl w-1/2" onSubmit={addToDos}>
				<label className="text-xl font-medium" htmlFor="item">
					New Item
				</label>
				<input onChange={handleChangeText} className="border-4 rounded-md" type="text" id="item" />
			</form>
			<Button form="toDoForm" type="submit" text="Add" />
			<ul>
				<li>laundry</li>
				<li>gym</li>
				<li>ldry</li>
			</ul>
		</div>
	);
};

export default ToDoDisplay;

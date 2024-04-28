import Heading from "../../common/Heading";
import ToDoDisplay from "./ToDoDisplay";

const ToDoApp = () => {
	return (
		<div>
			<Heading additionalClasses="ml-4" text="This is a To Do App" />
			<ToDoDisplay />
		</div>
	);
};

export default ToDoApp;

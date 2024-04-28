import Counter from "./miniProjects/Counter/Counter";
import CounterClone from "./miniProjects/CounterClone/CounterClone";
import ToDoApp from "./miniProjects/Todoapp/ToDoApp";
import API from "./miniProjects/WeatherAPI/API";

function App() {
	return (
		<>
			<Counter/>
			<ToDoApp/>
			<API/>
			<CounterClone />
		</>
	);
}

export default App;

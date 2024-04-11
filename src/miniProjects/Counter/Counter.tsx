import CounterButtons from "./CounterButtons";
import Heading from "../../common/Heading";

function Counter() {

	return (
		<>
			<Heading text= 'This is a Counter' />
			<CounterButtons />
		</>
	);
}

export default Counter;

// useState is a hook that is from react
// counter in this instance is the plain variable which we get back from the useState
// setCounter is a function. This function allows you to update the counter variable
// setCounter in this instance is used to add or subtract to the counter variable

// Tailwind has preset classes that can be called

// Counter headings and counter buttons are separate components. Initially al of the code was in this file 
// but I have incorporated compartmentalisation in this file for readability and simplicity. This required 
// some variables and functions to prop drilled. 

// instead of prop drilling it was efficient to encapsulate the logic inside the counter buttons component. 

// TODO: add icons to the plus and minus buttons instead of txt (possibly fontawesome)

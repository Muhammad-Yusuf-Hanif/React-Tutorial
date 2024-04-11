import { useState } from "react";

const CounterButtons = () => {
	const [counter, setCounter] = useState(0);

	function addCounter() {
		setCounter(counter + 1);
	}

	function subtractCounter() {
		setCounter(counter - 1);
	}

	return (
		<div className="flex row gap-10 text-2xl border-2 border-cyan-200 w-fit m-10 rounded-lg shadow-md">
			<AddMinusBtn btnText="-" onClick={subtractCounter} />
			<h1 className="pt-3">{counter}</h1>
			<AddMinusBtn btnText="+" onClick={addCounter} />
		</div>
	);
};

export default CounterButtons;

type AddMinusBtnProps = {
	btnText: string;
	onClick: () => void;
};

const AddMinusBtn = ({ btnText, onClick }: AddMinusBtnProps) => {
	return (
		<button
			className="py-3 px-6 bg-gray-100 rounded-tl-lg rounded-bl-lg"
			onClick={onClick}
		>
			{btnText}
		</button>
	);
};

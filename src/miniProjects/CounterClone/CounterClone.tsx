import { useState } from "react";

const CounterClone = () => {
	const [count, setCount] = useState(0);

	function incrementCount() {
		setCount(count + 1);
	}

	function decrementCount() {
		setCount(count - 1);
	}

	return (
		<div>
			<div>
				<button className="px-3" onClick={decrementCount}>
					-
				</button>
				<span>{count}</span>
				<button className="px-3" onClick={incrementCount}>
					+
				</button>
			</div>
		</div>
	);
};

export default CounterClone;

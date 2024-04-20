type Props = React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> & {
	text: string;
	additionalClasses?: string;
	size?: "sm" | "md";
};

const Button = ({ text, additionalClasses, size, ...rest }: Props) => {
	const small = "px-1 mt-1 text-sm min-w-[60px]";
	const medium = "px-4 mt-2 min-w-[100px]";
	return (
		<button
			className={`hover:scale-95 bg-teal-500 text-white rounded-md py-1 ${additionalClasses} ${
				size === "sm" ? small : medium
			}`}
			{...rest}
		>
			{text}
		</button>
	);
};

export default Button;

// This is a reusable component that was created to display text for any further announced
// components in  the website

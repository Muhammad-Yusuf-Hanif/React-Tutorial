type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & 
{
	text: string;
};

const Button = ({ text, ...rest }: Props) => {
	return (
		<button className="hover:scale-95 bg-teal-500 text-white rounded-md min-w-[100px] px-4 py-1 mt-2" {...rest}>
			{text}
		</button>
	);
};

export default Button;

// This is a reusable component that was created to display text for any further announced
// components in  the website

type TextProps = React.HTMLAttributes<HTMLDivElement> & {
	text: string;
	additionalClasses?: string;
};

const Text = ({ text, additionalClasses = "", ...rest }: TextProps) => {
  return (
    <div
      className={`text-2xl font-sans ${additionalClasses}`}
      {...rest}
    >
      {text}
    </div>
  );
};

export default Text;

// This is a reusable component that was created to display text for any further announced
// components in the website

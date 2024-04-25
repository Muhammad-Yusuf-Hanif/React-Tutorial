// Define the properties specific to the Heading component
type HeadingProps = React.HTMLAttributes<HTMLDivElement> & {
  text: string;
  additionalClasses?: string;
  size?: "sm" | "md";
};

const Heading = ({ text, additionalClasses = "", size = "md", ...rest }: HeadingProps) => {
  // Mapping size options to corresponding text sizes
  const sizeClasses = {
    sm: "text-2xl text-black",
    md: "text-4xl",
    lg: "text-6xl"
  };

  return (
    <div
      className={`pt-3 font-serif text-emerald-400 ${sizeClasses[size]} ${additionalClasses}`}
      {...rest}
    >
      {text}
    </div>
  );
};

export default Heading;

// This Heading component is designed to be a reusable utility for displaying
// text with configurable sizes and additional styling, ideal for various sections of a website.

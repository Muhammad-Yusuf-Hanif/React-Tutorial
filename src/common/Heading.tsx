type Props={
  text: string
}

const Heading = ({text}:Props) => {
  return (
    <div className='pl-5 pt-3 text-4xl text-emerald-400 font-serif'>
      {text}
    </div>
  )
}

export default Heading

// This is a reusable component that was created to display text for any further announced 
// components in  the website
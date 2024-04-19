type Props={
  text: string
}

const Text = ({text}:Props) => {
  return (
    <div className='text-2xl font-sans'>
      {text}
    </div>
  )
}

export default Text

// This is a reusable component that was created to display text for any further announced 
// components in the website
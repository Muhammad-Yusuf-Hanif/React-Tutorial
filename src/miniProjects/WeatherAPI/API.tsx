import Heading from "../../common/Heading"
import APIDisplay from "./APIDisplay"


const API = () => {
  return (
    <div className="mt-8">
      <Heading additionalClasses="ml-4" text="This is a Weather API"/>
      <APIDisplay/>
    </div>
  )
}

export default API

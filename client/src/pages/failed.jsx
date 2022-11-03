import { useLocation } from "react-router-dom";

const Failed = () => {
    const location = useLocation();

    console.log(location)
  return (
    <div>Failed</div>
  )
}

export default Failed
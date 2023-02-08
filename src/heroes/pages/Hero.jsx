import { useParams } from "react-router-dom"

export const Hero = () => {

  const params = useParams();
  console.log(params)
  return (
    <div>Hero</div>
  )
}

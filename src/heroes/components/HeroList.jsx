import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { HeroCard } from "./HeroCard"
import { useMemo } from "react"
import '../../assets/heroStyles.css'

export const HeroList = ({publisher}) => {
  const heroes = useMemo( () => getHeroesByPublisher(publisher), [publisher]) 

  return (
    <>
      <div className="card-container">
        {heroes.map( heroe => {
          return <HeroCard key={heroe.id} {...heroe} />
        })}
      </div>
    </>
  )
}

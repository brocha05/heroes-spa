import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { HeroCard } from "./HeroCard"

export const HeroList = ({publisher}) => {
  const heroes = getHeroesByPublisher(publisher)

  return (
    <>
      <div className="card">
        <HeroCard/>
        {heroes.map( heroe => {
          return <HeroCard key={heroe.id} {...heroe} />
        })}
      </div>
    </>
  )
}

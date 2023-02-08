import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { HeroCard } from "./HeroCard"
import '../../assets/heroStyles.css'

export const HeroList = ({publisher}) => {
  const heroes = getHeroesByPublisher(publisher)

  return (
    <>
      <div className="card">
        {heroes.map( heroe => {
          return <HeroCard key={heroe.id} {...heroe} />
        })}
      </div>
    </>
  )
}

import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"

export const HeroList = ({publisher}) => {
  const heroes = getHeroesByPublisher(publisher)

  return (
    <>
      <ul>
        {heroes.map( heroe => {
          return <li key={heroe.id}>{heroe.superhero}</li>
        })}
      </ul>
    </>
  )
}

import { AppRoutes } from "./routes/AppRoutes"
import {NavBar} from "./ui/components/NavBar"
import './assets/styles.css'
export const HeroesApp = () => {
  return (
    <>
      <NavBar/>
      <AppRoutes/>
    </>
  )
}

import { Routes, Route} from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"

export const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={ <LoginPage/> }/>
            <Route path="/*" element={ <HeroesRoutes/>}/>
        </Routes>
    </>
  )
}

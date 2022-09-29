import { Routes, Route, Navigate } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { DcPage } from "../heroes/pages/DcPage"
import { MarvelPage } from "../heroes/pages/MarvelPage"

export const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={ <LoginPage/> }/>
            <Route path="marvel" element={ <MarvelPage/> }/>
            <Route path="dc" element={ <DcPage/> }/>
            <Route path="/" element={ <Navigate to="marvel"/> }/>
        </Routes>
    </>
  )
}

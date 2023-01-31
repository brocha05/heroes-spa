import React from 'react'
import { NavBar } from '../../ui/components/NavBar'
import { Route, Routes, Navigate } from 'react-router-dom'
import { DcPage } from "../pages/DcPage"
import { MarvelPage } from "../pages/MarvelPage"
import { Search } from '../pages/Search'
import { Hero } from '../pages/Hero'

export const HeroesRoutes = () => {
  return (
    <>
        <NavBar/>
        <Routes>
            <Route path="marvel" element={ <MarvelPage/> }/>
            <Route path="dc" element={ <DcPage/> }/>
            <Route path="search" element={ <Search/> }/>
            <Route path="hero" element={ <Hero/> }/>
            <Route path="/" element={ <Navigate to="marvel"/> }/>
        </Routes>
    </>
  )
}

import React from 'react'
import { Navigate, Route, Routes } from "react-router";
import Home from './pages/Home'

export default function Page() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
  )
}

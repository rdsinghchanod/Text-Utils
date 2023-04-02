import React from 'react'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'

export default function App() {
  return (
    <>
      <Navbar title="Text Utils" />
      <TextForm heading="Enter Your Text Below" />
    </>
  )
}

import { useState } from 'react'
import { Habit } from './components/Habit';
import './styles/global.css';

function App() {
  return (
    <>
      <Habit completed={1} />
      <Habit completed={2} />
      <Habit completed={3} />
    </>
  )
}

export default App

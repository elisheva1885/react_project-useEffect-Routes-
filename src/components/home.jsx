import React, { useContext } from 'react'
import { appContext } from '../context/context'

export default function Home () {
    const {number} = useContext(appContext)
  return (
    <div>
        home
        <h3>
            Numer of counter: {number}
        </h3>
    </div>
  )
}


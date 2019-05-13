import React from 'react'
import AllCandies from '../components/CandiesList'

import {BrowserRouter, Route, Switch} from "react-router-dom";

const Root = () => {
  return (
    <div>
      <nav>
        Goodie Bag
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
      </main>
        <div>
            <AllCandies />

        </div>
    </div>
  )
}

export default Root

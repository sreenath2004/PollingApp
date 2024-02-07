import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './login';
import PollApp from './main';
import CreatePollPage from './poll';
import Signup from './signup';
export default class Routing extends Component {
  render() {
    return (
      <div>
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/poll' element={<CreatePollPage/>}/>
                <Route path='/main' element={<PollApp/>}/>
                <Route path='/signup' element={<Signup/>}/>

                
            </Routes>
        </Router>


      </div>
    )
  }
}

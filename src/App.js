import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'

import Home from './features/home/Home';

const App = () => {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/"> */}
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    {/* <Home /> */}
                    {/* </Route> */}
                    {/* sushant */}
                    {/* dil */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import './App.css'

import { Navbar, Exchanges, Homepage, Cryptocurrencies, CryptoDetails, News } from './components/index'


const App = () => {
  return (
    <div className="app">
      <section className="navbar">
        <Navbar />
      </section>

      <section className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path='/' element={<Homepage />} />
              <Route exact path='/exchange' element={<Exchanges />} />
              <Route exact path='/cruptocurrencies' element={<Cryptocurrencies />} />
              <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
              <Route exact path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>
      </section>

      <section className="footer">

      </section>
    </div>
  )
}

export default App
import React from 'react'
//import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Todos from './containers/Todos/Todos'
import CssBaseLine from '@material-ui/core/CssBaseline'

export default function App() {
  return (
    <>
      <CssBaseLine />
      <Layout>
          <Todos />
      </Layout>
    </>
  )
}



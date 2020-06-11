import React from 'react'
import { Route, Switch, Redirect, withRouter } from "react-router-dom"
import Layout from './components/Layout/Layout'
import Todos from './containers/Todos/Todos'
import Category from './containers/Category/Category'
import Trash from './containers/Trash/Trash'
import NotFound from './containers/NotFound/NotFound'
import CssBaseLine from '@material-ui/core/CssBaseline'

const App = ({ history }) => {
  return (
    <>
      <CssBaseLine />
      <Layout history={history}>
        <Switch>
          <Route history={history} exact path='/category/:slug' component={Category} />
          <Route history={history} exact path='/trash' component={Trash} />
          <Route history={history} exact path='/' component={Todos} />
          <Route path='/404' component={NotFound} />
          <Redirect from='*' to='/404' />
        </Switch>
      </Layout>
    </>
  )
}

export default withRouter(App)



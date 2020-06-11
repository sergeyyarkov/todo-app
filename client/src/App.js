import React from 'react'
import { Route, Switch, Redirect, withRouter } from "react-router-dom"
import Layout from './components/Layout/Layout'
import TodosContainer from './containers/TodosContainer/TodosContainer'
import CategoryContainer from './containers/CategoryContainer/CategoryContainer'
import TrashContainer from './containers/TrashContainer/TrashContainer'
import NotFoundContainer from './containers/NotFoundContainer/NotFoundContainer'
import CssBaseLine from '@material-ui/core/CssBaseline'

const App = ({ history }) => {
  return (
    <>
      <CssBaseLine />
      <Layout history={history}>
        <Switch>
          <Route history={history} exact path='/category/:slug' component={CategoryContainer} />
          <Route history={history} exact path='/trash' component={TrashContainer} />
          <Route history={history} exact path='/' component={TodosContainer} />
          <Route path='/404' component={NotFoundContainer} />
          <Redirect from='*' to='/404' />
        </Switch>
      </Layout>
    </>
  )
}

export default withRouter(App)



import React from 'react';
import Header from '../Header/Header';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  layout: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

const Layout = ({ children, history }) => {
  const classes = useStyles()

  return (
    <div className={classes.layout}>
      <Header history={history} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children} 
      </main>
    </div>
  )
}

export default Layout
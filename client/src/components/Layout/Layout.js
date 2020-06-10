import React from 'react';
import Header from '../Header/Header'
import Main from '../Main/Main'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  layout: {
    display: 'flex'
  }
}))

const Layout = () => {
  const classes = useStyles()
  return (
    <div className={classes.layout}>
      <Header />
      <Main />
    </div>
  )
}

export default Layout
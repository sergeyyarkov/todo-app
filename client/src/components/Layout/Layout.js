import React from 'react';
import Header from '../Header/Header';
import useStyles from './styles'

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
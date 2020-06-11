import React from 'react'
import NavContent from './NavContent/NavContent'
import { Drawer, Hidden, makeStyles, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 240,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: 240,
  },
}));

const Nav = ({ window, mobileOpen, handleDrawerToggle, history }) => {
  const classes = useStyles();
  const theme = useTheme();
  
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <NavContent history={history} />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <NavContent history={history} />
        </Drawer>
      </Hidden>
    </nav>
  )
}

export default Nav
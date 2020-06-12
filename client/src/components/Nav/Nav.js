import React from 'react'
import NavContent from './NavContent/NavContent'
import CreateCategoryModal from '../Modals/Category/CreateCategoryModal'
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

  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const handleCloseModal = () => setIsModalOpen(false)
  const handleOpenModal = () => setIsModalOpen(true)

  return (
    <>
      <CreateCategoryModal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />
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
            <NavContent handleOpenModal={handleOpenModal} history={history} />
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
            <NavContent handleOpenModal={handleOpenModal} history={history} />
          </Drawer>
        </Hidden>
      </nav>
    </>
  )
}

export default Nav
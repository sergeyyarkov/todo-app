import React from 'react';
import Nav from '../Nav/Nav'
import useStyles from './styles'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu';
import CategoryIcon from '@material-ui/icons/Category';
import DeleteIcon from '@material-ui/icons/Delete';
import ErrorIcon from '@material-ui/icons/Error';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

const renderHeading = (history, classes) => {
  const { pathname } = history.location
  
  if (pathname.split('/')[1] === 'category') {
    return <span className={classes.pageHeading}><CategoryIcon className={classes.pageHeadingImg} />Категория {pathname.split('/')[2]}</span>
  }

  switch(pathname) {
    case '/':
      return <span className={classes.pageHeading}><FormatListBulletedIcon className={classes.pageHeadingImg} /> Список дел</span>
    case '/trash':
      return <span className={classes.pageHeading}><DeleteIcon className={classes.pageHeadingImg} /> Корзина</span>
    default:
      return <span className={classes.pageHeading}><ErrorIcon className={classes.pageHeadingImg} /> Ошибка</span>
  }
}

const Header = ({ history }) => {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h1" noWrap>
            {renderHeading(history, classes)}
          </Typography>
        </Toolbar>
      </AppBar>
      <Nav mobileOpen={mobileOpen} history={history} handleDrawerToggle={handleDrawerToggle} />
    </>
  )
}

export default Header
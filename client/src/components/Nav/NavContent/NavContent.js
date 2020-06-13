import React from 'react';
import Categories from '../../Categories/Categories'
import { Link } from 'react-router-dom'
import MuiLink from '@material-ui/core/Link';
import { Divider, List, ListItemIcon, ListItemText, Collapse, ListItem, IconButton, Typography, makeStyles } from '@material-ui/core'

import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import CategoryIcon from '@material-ui/icons/Category';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

import categories from '../../../db/categories.json'

const useStyles = makeStyles((theme) => ({
  navHeading: {
    padding: '10px 0px 10px 16px',
    minHeight: 64,
    display: 'flex',
    alignItems: 'center',
    color: 'rgba(255, 255, 255, 0.7)'
  },
  githubIcon: {
    marginLeft: 10
  },
  author: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 10
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  addCategoryItem: {
    display: 'flex',
    justifyContent: 'center'
  },
  link: {
    textDecoration: 'none',
    color: '#fff'
  }
}))

const NavContent = ({ history, handleOpenModal }) => {
  const classes = useStyles()
  const [collapseInfo, setCollapseInfo] = React.useState({
    idCollapse: 0,
    isCollapseOpen: false,
  })

  const listItemSelectedHandler = (e, index) => {
    setCollapseInfo({
      idCollapse: index,
      isCollapseOpen: !collapseInfo.isCollapseOpen
    })
  }

  return (
    <>
      <div className={classes.navHeading}>
        <Typography>
          <MuiLink style={{ color: 'rgba(255, 255, 255, 0.7)' }} href="#" variant='h1'>
            Todo App
          </MuiLink>
          <br />
          <span className={classes.author} href="#">
            Github: <MuiLink href='https://github.com/sergeyyarkov/todo-app' target='_blank'><GitHubIcon className={classes.githubIcon} color='action' fontSize='small' /></MuiLink>
          </span>
        </Typography>
      </div>
      <Divider />
      <List>
        <Link className={classes.link} to='/'>
          <ListItem selected={history.location.pathname === '/'} button> 
            <ListItemIcon>
              <FormatListBulletedIcon />
            </ListItemIcon>
            <ListItemText primary={'Список дел'} />
          </ListItem>
        </Link>
        <ListItem onClick={(e) => listItemSelectedHandler(e, 1)} button> 
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary={'Категории'} />
          {collapseInfo.isCollapseOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={collapseInfo.isCollapseOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Categories data={categories} history={history} classes={classes} />
            <ListItem className={classes.addCategoryItem}>
              <IconButton onClick={handleOpenModal} aria-label="add">
                <AddIcon />
              </IconButton>
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        <Link className={classes.link} to='/trash'>
          <ListItem selected={history.location.pathname === '/trash'} button> 
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary={'Корзина'} />
          </ListItem>
        </Link>
      </List>
    </>
  )
}

export default NavContent
import React from 'react';
import useStyles from '../styles'
import Categories from '../../Categories/Categories'
import { Link } from 'react-router-dom'
import { Divider, List, ListItemIcon, ListItemText, Collapse, ListItem, IconButton, Typography } from '@material-ui/core'
import MuiLink from '@material-ui/core/Link';

import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import CategoryIcon from '@material-ui/icons/Category';
import AddIcon from '@material-ui/icons/Add';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { Query } from 'react-apollo'

import GET_CATEGORIES from '../../../apollo/queries/categories/categories'

const NavContent = ({ history, handleOpenModal }) => {
  const classes = useStyles() 
  const [collapseInfo, setCollapseInfo] = React.useState({ idCollapse: 0, isCollapseOpen: false, })
  
  const listItemSelectedHandler = (e, index) => setCollapseInfo({ idCollapse: index, isCollapseOpen: !collapseInfo.isCollapseOpen })
  
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
            <Query query={GET_CATEGORIES}>
              {({ loading, error, data }) => {
                if (loading) return null;
                if (error) return `Error! ${error}`;
                return <Categories data={data.categories} history={history} classes={classes} />
              }}
            </Query>
            <ListItem className={classes.addCategoryItem}>
              <IconButton onClick={handleOpenModal} aria-label="add">
                <AddIcon />
              </IconButton>
            </ListItem>
          </List>
        </Collapse>
        <Divider />
      </List>
    </>
  )
}

export default NavContent
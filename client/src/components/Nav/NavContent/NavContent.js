import React from 'react';
import Divider from '@material-ui/core/Divider';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import CategoryIcon from '@material-ui/icons/Category';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GitHubIcon from '@material-ui/icons/GitHub';
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import IconButton from '@material-ui/core/IconButton'
import MuiLink from '@material-ui/core/Link';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';

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
    marginTop: 5
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

const NavContent = ({ history }) => {
  const classes = useStyles()
  const [isListOpen, setIsListOpen] = React.useState({
    idCollapse: 0,
    current: false,
  })

  const listItemSelectedHandler = (e, index) => {
    if (index === 1) setIsListOpen({
      idCollapse: 1,
      current: !isListOpen.current
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
        {isListOpen.current ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={isListOpen.current} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {[1,2,3].map((e, i) => {
            return (
              <Link className={classes.link} key={i} to={`/category/${i}`}>
                  <ListItem selected={history.location.pathname === `/category/${i}`} button className={classes.nested}>
                    <ListItemText primary={"Категория " + i} />
                  </ListItem>
              </Link>
            )
          })}
          <ListItem className={classes.addCategoryItem}>
            <IconButton aria-label="add">
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
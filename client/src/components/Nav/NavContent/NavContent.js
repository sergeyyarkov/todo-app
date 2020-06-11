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
import Link from '@material-ui/core/Link';
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
  }
}))

const Drawer = () => {
  const classes = useStyles()
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [isListOpen, setIsListOpen] = React.useState({
    idCollapse: 0,
    current: false,
  })

  const listItemSelectedHandler = (e, index) => {
    setSelectedIndex(index)
    if (index === 1) setIsListOpen({
      idCollapse: 1,
      current: !isListOpen.current
    })
  }
  
  return (
    <>
    <div className={classes.navHeading}>
      <Typography>
        <Link style={{ color: 'rgba(255, 255, 255, 0.7)' }} href="#" variant='h1'>
          Todo App
        </Link>
        <br />
        <span className={classes.author} href="#">
          Github: <Link href='https://github.com/sergeyyarkov/todo-app' target='_blank'><GitHubIcon className={classes.githubIcon} color='action' fontSize='small' /></Link>
        </span>
      </Typography>
    </div>
    <Divider />
    <List>
      <ListItem onClick={(e) => listItemSelectedHandler(e, 0)} selected={selectedIndex === 0} button> 
        <ListItemIcon>
          <FormatListBulletedIcon />
        </ListItemIcon>
        <ListItemText primary={'Список дел'} />
      </ListItem>
      <ListItem onClick={(e) => listItemSelectedHandler(e, 1)} selected={selectedIndex === 1} button> 
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
              <ListItem key={i} button className={classes.nested}>
                <ListItemText primary={"Категория " + i} />
              </ListItem>
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
      <ListItem onClick={(e) => listItemSelectedHandler(e, 2)} selected={selectedIndex === 2} button> 
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        <ListItemText primary={'Корзина'} />
      </ListItem>
    </List>
  </>
  )
}

export default Drawer
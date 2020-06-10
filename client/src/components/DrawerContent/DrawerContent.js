import React from 'react';
import Divider from '@material-ui/core/Divider';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import CategoryIcon from '@material-ui/icons/Category';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  nested: {
    paddingLeft: theme.spacing(4)
  }
}))

const Drawer = () => {
  const classes = useStyles()
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [isListOpen, setListOpen] = React.useState(false)

  const listItemSelectedHandler = (e, index) => {
    setSelectedIndex(index)
    if (index === 1) setListOpen(!isListOpen)
  }

  return (
    <>
    <div className={classes.toolbar} />
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
        {isListOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={isListOpen} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItem button className={classes.nested}>
          <ListItemText primary="Категория 1" />
        </ListItem>
        <ListItem button className={classes.nested}>
          <ListItemText primary="Категория 2" />
        </ListItem>
        <ListItem button className={classes.nested}>
          <ListItemText primary="Категория 3" />
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
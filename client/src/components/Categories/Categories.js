import React from 'react';
import { Link } from 'react-router-dom'
import { ListItem, ListItemText } from '@material-ui/core'

const Categories = ({ data, history, classes }) => {
  return data.map((category, i) => {
    return (
      <Link className={classes.link} key={i} to={`/category/${category._id.$oid}`}>
          <ListItem selected={history.location.pathname === `/category/${category._id.$oid}`} button className={classes.nested}>
            <ListItemText primary={category.title} />
          </ListItem>
      </Link>
    )
  })
}

export default Categories
import React from 'react';
import { Link } from 'react-router-dom'
import { ListItem, ListItemText } from '@material-ui/core'

const Categories = ({ data, history, classes }) => {
  return data.map((e, i) => {
    return (
      <Link className={classes.link} key={i} to={`/category/${i}`}>
          <ListItem selected={history.location.pathname === `/category/${i}`} button className={classes.nested}>
            <ListItemText primary={"Категория " + i} />
          </ListItem>
      </Link>
    )
  })
}

export default Categories
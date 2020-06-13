import { makeStyles } from '@material-ui/core';

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
}));

export default useStyles
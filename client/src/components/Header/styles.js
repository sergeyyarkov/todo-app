import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  pageHeading: {
    display: 'flex',
    alignItems: 'center',
  },
  pageHeadingImg: {
    marginRight: 10
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - 240px)`,
      marginLeft: 240,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

export default useStyles
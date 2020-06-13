import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  alarmIcon: {
    marginRight: 10
  },
  cardActions: {
    justifyContent: 'flex-end'
  },
  cardHeading: {
    marginBottom: 10
  },
  cardCategoryHeading: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 14
  },
  cardAlarm: {
    display: 'flex',
    alignItems: 'center'
  },
  fab: {
    position: 'fixed',
    margin: 30,
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

export default useStyles
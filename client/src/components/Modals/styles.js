import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  headingIcon: {
    marginRight: 10,
    verticalAlign: 'text-bottom'
  },
  textField: {
    margin: '10px 0px'
  },
  selectField: {
    margin: '10px 0px'
  }
}))

export default useStyles
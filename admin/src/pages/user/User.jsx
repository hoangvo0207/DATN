import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { updateUser } from '../../contexts/userContext/apiCall';
import { UserContext } from '../../contexts/userContext/UserContext';

const useStyles = makeStyles(() => ({
  userItem: {
    flex: 4,
    padding: 20
  },
  userTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  addUserItem: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20
  },
  cardRoot: {
    display: 'flex',
    marginTop: 20,
    borderRadius: 10
  },
  cardDetail: {
    display: 'block',
  },
  cardContent: {
    flex: '1 0 auto',
  },
  cardForm: {
    display: 'block',
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#491b1d',
    color: 'white'
  },
  media: {
    width: 250,
    height: 250
  },
  textField: {
    backgroundColor: 'white',
    borderRadius: 10
  },
  button: {
    margin: '10px 0px 20px 20px',
    borderRadius: 10,
    backgroundColor: '#743a36',
    width: 150,
    height: 50,
    color: 'white'
  },
  cancel: {
      margin: '10px 0px 20px 20px',
      borderRadius: 10,
      backgroundColor: '#b96a59',
      width: 150,
      height: 50,
      color: 'white'
  }
}));

const User = () => {
  const { user, dispatch } = useContext(UserContext);

  const [updatedUser, setUpdatedUser] = useState(user);

  const history = useHistory();

  const classes = useStyles();

  useEffect(() => {
    setUpdatedUser(user);
  }, [user]);

  const handleChange = (e) => {
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(updatedUser, dispatch);
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value
    })
    history.push('/users');
  }

  const handleCancel = () => {
    history.push('/users');
  }

  return (
    <Grid container spacing={3} className={classes.userItem}>
      <Grid item xs={12}>
        <Typography variant='h4' className={classes.userTitle}>
          Update User
        </Typography>

        <Card elevation={10} className={classes.cardRoot}>
          <CardMedia
            className={classes.media}
            image={user.profilePic}
            title='avatar'
          />
          <div className={classes.cardDetail}>
            <CardContent className={classes.cardContent}>
              <Typography variant='h5'>
                {updatedUser.username}
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                Id: {updatedUser._id}
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                Email: {updatedUser.email}
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                {updatedUser.isAdmin ? 'Admin' : 'User'}
              </Typography>
            </CardContent>
          </div>
        </Card>

        <Card elevation={10} className={classes.cardForm}>
          <form>
            <div className={classes.addUserItem} >
              <Typography variant='body1'>Username</Typography>
              <TextField
                name='username'
                variant='outlined'
                fullWidth
                className={classes.textField}
                value={updatedUser.username}
                onChange={handleChange}
              />
            </div>

            <div className={classes.addUserItem} >
              <Typography variant='body1'>Email</Typography>
              <TextField
                name='email'
                variant='outlined'
                fullWidth
                className={classes.textField}
                value={updatedUser.email}
                onChange={handleChange}
              />
            </div>

            <div className={classes.addUserItem} >
              <Typography variant='body1'>Profile Picture</Typography>
              <TextField
                name='profilePic'
                variant='outlined'
                fullWidth
                className={classes.textField}
                value={updatedUser.profilePic}
                onChange={handleChange}
              />
            </div>

            <div className={classes.addUserItem} >
              <Typography variant='body1'>Admin</Typography>
              <TextField
                name='isAdmin'
                variant='outlined'
                fullWidth
                disabled
                className={classes.textField}
                value={updatedUser.isAdmin ? 'Admin' : 'User'}
                onChange={handleChange}
              />
            </div>

            <Button
              variant='contained'
              className={classes.button}
              onClick={handleSubmit}
            >
              Submit
            </Button>

            <Button
              variant='contained'
              className={classes.cancel}
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </form>
        </Card>
      </Grid>
    </Grid >
  );
};

export default User;

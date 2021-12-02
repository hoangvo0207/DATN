import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { updateUser } from '../../contexts/userContext/apiCall';
import { UserContext } from '../../contexts/userContext/UserContext';
import './user.scss';

const User = () => {
  const { user, dispatch } = useContext(UserContext);

  const [updatedUser, setUpdatedUser] = useState(user);

  const history = useHistory();

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
  console.log({updatedUser})

  return (
    <Grid container spacing={3} className='userItem'>
      <Grid item xs={12}>
        <Typography variant='h4' className='userTitle'>
          Update User
        </Typography>

        <Paper elevation={10} style={{ width: '100%', height: '90%', marginLeft: 5, marginTop: 20 }}>
          <Paper elevation={3}>
            <Card className='cardRoot'>
              <CardMedia
                className='media'
                image={user.profilePic}
                title='avatar'
              />
              <div className='cardDetail'>
                <CardContent className='cardContent'>
                  <Typography component='h5' variant='h5'>
                    {updatedUser.username}
                  </Typography>
                  <Typography variant='subtitle1' color='textSecondary'>
                    Id: {updatedUser._id}
                  </Typography>
                  <Typography variant='subtitle1' color='textSecondary'>
                    Email: {updatedUser.email}
                  </Typography>
                  <Typography variant='subtitle1' color='textSecondary'>
                    Admin: {updatedUser.isAdmin}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </Paper>

          <Paper elevation={10} style={{ marginTop: 80 }}>
            <form>
              <div className='addUserItem' >
                <label>Username</label>
                <TextField
                  name='username'
                  variant='outlined'
                  fullWidth
                  value={updatedUser.username}
                  onChange={handleChange}
                />
              </div>

              <div className='addUserItem' >
                <label>Email</label>
                <TextField
                  name='email'
                  variant='outlined'
                  fullWidth
                  value={updatedUser.email}
                  onChange={handleChange}
                />
              </div>

              <div className='addUserItem' >
                <label>Profile Picture</label>
                <TextField
                  name='profilePic'
                  variant='outlined'
                  fullWidth
                  value={updatedUser.profilePic}
                  onChange={handleChange}
                />
              </div>

              <div className='addUserItem' >
                <label>Admin</label>
                <TextField
                  name='isAdmin'
                  variant='outlined'
                  fullWidth
                  disabled
                  value={updatedUser.isAdmin}
                  onChange={handleChange}
                />
              </div>

              <Button
                variant='contained'
                color='primary'
                className='button'
                onClick={handleSubmit}
                style={{ marginLeft: 20, marginBottom: 20 }}
              >
                Submit
              </Button>
            </form>
          </Paper>
        </Paper>
      </Grid>
    </Grid >
  );
};

export default User;

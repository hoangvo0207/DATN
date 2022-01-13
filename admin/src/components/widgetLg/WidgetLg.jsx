import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  widgetLg: {
    flex: 2,
    WebkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    backgroundColor: 'white',

  },
  moviePoster: {
    width: 920,
    height: 650,
    borderRadius: 10
  }
}));

const WidgetLg = () => {
  const classes = useStyles();

  return (
    <div className={classes.widgetLg}>
      <img
        src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80'
        alt='movie-poster'
        className={classes.moviePoster}
      />
    </div>
  );
};

export default WidgetLg;

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
  CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis
} from 'recharts';

const useStyles = makeStyles(() => ({
  chart: {
    padding: 20,
    margin: 'auto',
    width: '95%',
    borderRadius: 10,
    WebkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    backgroundColor: 'white'

  },
  chartTitle: {
    marginBottom: 20
  }
}));

const Chart = (props) => {
  const { title, data, dataKey, grid } = props;

  const classes = useStyles();

  return (
    <div className={classes.chart}>
      <Typography variant='h5' className={classes.chartTitle}>{title}</Typography>

      <ResponsiveContainer width='100%' aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey='name' stroke='#5550bd' />
          <Line type='monotone' dataKey={dataKey} stroke='#5550bd' />
          <Tooltip />
          {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

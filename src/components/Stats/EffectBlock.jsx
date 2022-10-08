import { negativeEngravings } from '../../engravings';

const { Grid } = require('@mui/material');

const EffectBlock = ({ name, value }) => {
  const isNegative = negativeEngravings.includes(name);
  const color = isNegative ? '#FF584D' : '#056FFA';
  const newValue = value > 15 ? 15 : value;

  return (
    <Grid container style={{ marginTop: '5px', color: color }}>
      <Grid item xs={9}>
        <b>{name}:</b>
      </Grid>
      <Grid item xs={3}>
        <b>{newValue}/15</b>
      </Grid>
    </Grid>
  );
};

export default EffectBlock;

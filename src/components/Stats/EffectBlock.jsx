import { negativeEngravings } from '../../engravings';

const { Grid } = require('@mui/material');

const EffectBlock = ({ name, value }) => {
  const isNegative = negativeEngravings.includes(name);
  const color = isNegative ? '#FF584D' : '#056FFA';
  const newValue = value > 15 ? 15 : value;
  const excessValue = value - 15;

  const level = Math.floor(newValue / 5);

  const excessValueDisplay =
    excessValue < 0 ? `${excessValue}` : `+${excessValue}`;

  return (
    <Grid container style={{ marginTop: '20px', color: color }}>
      <Grid item xs={9}>
        <b>{name}:</b>
      </Grid>
      <Grid item xs={3}>
        <b>
          {level}/3 {excessValue != 0 && <b>({excessValueDisplay})</b>}
        </b>
      </Grid>
    </Grid>
  );
};

export default EffectBlock;

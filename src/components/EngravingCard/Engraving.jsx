import { TextField, Autocomplete, Grid } from '@mui/material';
import styled from 'styled-components';
import {
  normalEngravings,
  classEngravings,
  negativeEngravings,
} from '../../engravings';

const selectorWidth = '100%';
const selectorSize = 'small';

const positiveColor = '#056FFA';
const negativeColor = '#FF584D';

const PositiveSelector = styled(Autocomplete)(() => ({
  width: selectorWidth,
  margin: '10px 0',
  '& .MuiInputLabel-root, .MuiOutlinedInput-root, .Mui-focused': {
    color: positiveColor,
    borderColor: positiveColor,
  },
  '& .MuiOutlinedInput-notchedOutline, .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
    {
      color: positiveColor,
      borderColor: positiveColor,
    },
  '& .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
    {
      borderColor: positiveColor,
    },
  '& .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
    {
      borderColor: positiveColor,
    },
}));

const NegativeSelector = styled(Autocomplete)(() => ({
  width: selectorWidth,
  margin: '10px 0',
  '& .MuiInputLabel-root, .MuiOutlinedInput-root, .Mui-focused': {
    color: negativeColor,
    borderColor: negativeColor,
  },
  '& .MuiOutlinedInput-notchedOutline, .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused':
    {
      borderColor: negativeColor,
      color: negativeColor,
    },
  '& .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
    {
      borderColor: negativeColor,
    },
  '& .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
    {
      borderColor: negativeColor,
    },
}));

const selectorGridSize = 9;
const inputGridSize = 3;

const Engraving = ({ showNegative = true, showPriceField = true }) => {
  const positiveEngravings = [...normalEngravings, ...classEngravings];
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={selectorGridSize}>
          <PositiveSelector
            options={[...positiveEngravings, ...normalEngravings]}
            size={selectorSize}
            renderInput={(params) => (
              <TextField {...params} label='Engraving' />
            )}
          />
        </Grid>
        <Grid item xs={inputGridSize}>
          <TextField
            hiddenLabel
            defaultValue={0}
            sx={{
              width: '100%',
              margin: '10px auto',
              '& input': {
                textAlign: 'center',
                color: positiveColor,
                backgroundColor: 'white',
              },
            }}
            variant='filled'
            size='small'
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={selectorGridSize}>
          <PositiveSelector
            options={[...positiveEngravings, ...normalEngravings]}
            size={selectorSize}
            renderInput={(params) => (
              <TextField {...params} label='Engraving' />
            )}
          />
        </Grid>
        <Grid item xs={inputGridSize}>
          <TextField
            hiddenLabel
            defaultValue={0}
            sx={{
              width: '100%',
              margin: '10px auto',
              '& input': {
                textAlign: 'center',
                color: positiveColor,
                backgroundColor: 'white',
              },
            }}
            variant='filled'
            size='small'
          />
        </Grid>
      </Grid>
      {showNegative && (
        <Grid container spacing={2}>
          <Grid item xs={selectorGridSize}>
            <NegativeSelector
              options={negativeEngravings}
              size={selectorSize}
              renderInput={(params) => (
                <TextField {...params} label='Engraving' />
              )}
            />
          </Grid>
          <Grid item xs={inputGridSize}>
            <TextField
              hiddenLabel
              defaultValue={0}
              sx={{
                width: '100%',
                margin: '10px auto',
                '& input': {
                  textAlign: 'center',
                  color: negativeColor,
                  backgroundColor: 'white',
                },
              }}
              variant='filled'
              size='small'
            />
          </Grid>
        </Grid>
      )}
      {showPriceField && (
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <h4 style={{ textAlign: 'center' }}>Price:</h4>
          </Grid>
          <Grid item xs={9} style={{ paddingLeft: 0 }}>
            <TextField
              hiddenLabel
              defaultValue={0}
              sx={{
                width: '100%',
                margin: '10px auto',
                '& input': {
                  textAlign: 'center',
                  backgroundColor: 'white',
                },
              }}
              variant='filled'
              size='small'
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Engraving;

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

  '.MuiAutocomplete-endAdornment > button': {
    color: positiveColor,
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
  '.MuiAutocomplete-endAdornment > button': {
    color: negativeColor,
  },
}));

const selectorGridSize = 9;
const inputGridSize = 3;

const Engraving = ({
  showNegative = true,
  showPriceField = true,
  isStone = false,
  state,
  setState,
  id,
}) => {
  let positiveEngravings = normalEngravings;

  const engravingState = state[id];

  const { p1, p2, n1, price } = engravingState;

  const setEngrave = (valueId, value) => {
    const oldState = state[id];
    const oldPoint = oldState[valueId];
    const newTypeState = {
      ...oldState,
      [valueId]: {
        ...oldPoint,
        label: value,
      },
    };

    const newState = {
      ...state,
      [id]: {
        ...newTypeState,
      },
    };

    setState(newState);
    localStorage.setItem('shop-ark-state', JSON.stringify(newState));
  };

  const setPoint = (valueId, value) => {
    const oldState = state[id];
    const oldPos = oldState[valueId];
    const newTypeState = {
      ...oldState,
      [valueId]: {
        ...oldPos,
        point: parseInt(value),
      },
    };

    const newState = {
      ...state,
      [id]: {
        ...newTypeState,
      },
    };

    setState(newState);
    localStorage.setItem('shop-ark-state', JSON.stringify(newState));
  };

  const setPrice = (value) => {
    const oldState = state[id];
    const newTypeState = {
      ...oldState,
      price: parseInt(value),
    };

    const newState = {
      ...state,
      [id]: {
        ...newTypeState,
      },
    };

    setState(newState);
    localStorage.setItem('shop-ark-state', JSON.stringify(newState));
  };

  if (!isStone) {
    positiveEngravings = [...normalEngravings, ...classEngravings];
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={selectorGridSize}>
          <PositiveSelector
            options={positiveEngravings.map((val) => ({
              id: 'p1',
              label: val,
            }))}
            size={selectorSize}
            defaultValue={p1.label || null}
            value={p1.label || null}
            onChange={(e, value) => {
              if (!value) {
                setEngrave('p1', null);
              } else {
                setEngrave('p1', value.label);
              }
            }}
            renderInput={(params) => (
              <TextField {...params} label='Engraving' />
            )}
          />
        </Grid>
        <Grid item xs={inputGridSize}>
          <TextField
            id='p1'
            hiddenLabel
            defaultValue={p1.point || 0}
            value={p1.point || 0}
            onChange={(e) => {
              const { id: valueId, value } = e.target;
              setPoint(valueId, value);
            }}
            sx={{
              width: '100%',
              margin: '10px auto',
              '& input': {
                textAlign: 'center',
                color: positiveColor,
                backgroundColor: '#121212',
                border: `1px solid ${positiveColor}`,
                borderRadius: '5px',
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
            options={positiveEngravings.map((val) => ({
              id: 'p2',
              label: val,
            }))}
            onChange={(e, value) => {
              if (!value) {
                setEngrave('p2', null);
              } else {
                setEngrave('p2', value.label);
              }
            }}
            size={selectorSize}
            defaultValue={p2.label || null}
            value={p2.label || null}
            renderInput={(params) => (
              <TextField {...params} label='Engraving' />
            )}
          />
        </Grid>
        <Grid item xs={inputGridSize}>
          <TextField
            id='p2'
            hiddenLabel
            defaultValue={p2.point || 0}
            value={p2.point || 0}
            onChange={(e) => {
              const { id: valueId, value } = e.target;
              setPoint(valueId, value);
            }}
            sx={{
              width: '100%',
              margin: '10px auto',
              '& input': {
                textAlign: 'center',
                color: positiveColor,
                backgroundColor: '#121212',
                border: `1px solid ${positiveColor}`,
                borderRadius: '5px',
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
              options={negativeEngravings.map((val) => ({
                id: 'n1',
                label: val,
              }))}
              defaultValue={n1.label || null}
              value={n1.label || null}
              onChange={(e, value) => {
                if (!value) {
                  setEngrave('n1', null);
                } else {
                  setEngrave('n1', value.label);
                }
              }}
              size={selectorSize}
              renderInput={(params) => (
                <TextField {...params} label='Engraving' />
              )}
            />
          </Grid>
          <Grid item xs={inputGridSize}>
            <TextField
              id='n1'
              hiddenLabel
              defaultValue={n1.point || 0}
              value={n1.point || 0}
              onChange={(e) => {
                const { id: valueId, value } = e.target;
                setPoint(valueId, value);
              }}
              sx={{
                width: '100%',
                margin: '10px auto',
                '& input': {
                  textAlign: 'center',
                  color: negativeColor,
                  backgroundColor: '#121212',
                  border: `1px solid ${negativeColor}`,
                  borderRadius: '5px',
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
              defaultValue={price || 0}
              value={price || 0}
              sx={{
                width: '100%',
                margin: '10px auto',
                '& input': {
                  textAlign: 'center',
                  color: 'white',
                  backgroundColor: '#121212',
                  border: `1px solid white`,
                  borderRadius: '5px',
                },
              }}
              onChange={(e) => {
                setPrice(e.target.value);
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

import styled from 'styled-components';
import EffectBlock from './EffectBlock';

const { Card, CardContent, List } = require('@mui/material');

const StyledH2 = styled.h2`
  margin: 0;
  text-align: center;
`;

const StyledP = styled.h3`
  margin: 0;
`;

const Stats = ({ state }) => {
  const keys = Object.keys(state);

  const totalMap = new Map();
  totalMap.set('pos', new Map());
  totalMap.set('neg', new Map());

  for (let each of keys) {
    const eachSlot = state[each];

    const { p1, p2, n1, price } = eachSlot;

    const posMap = totalMap.get('pos');
    const negMap = totalMap.get('neg');

    if (p1?.label) {
      const p1Value = posMap.get(p1.label);
      if (p1Value) {
        posMap.set(p1.label, p1Value + p1.point);
      } else {
        posMap.set(p1.label, p1.point);
      }
    }

    if (p2?.label) {
      const p2Value = posMap.get(p2.label);
      if (p2Value) {
        posMap.set(p2.label, p2Value + p2.point);
      } else {
        posMap.set(p2.label, p2.point);
      }
    }

    if (n1?.label) {
      const n1Value = negMap.get(n1.label);
      if (n1Value) {
        negMap.set(n1.label, n1Value + n1.point);
      } else {
        negMap.set(n1.label, n1.point);
      }
    }

    if (price) {
      const totalPrice = totalMap.get('price');
      if (totalPrice) {
        totalMap.set('price', totalPrice + price);
      } else {
        totalMap.set('price', price);
      }
    }

    totalMap.set('pos', posMap);
    totalMap.set('neg', negMap);
  }

  const posEngravings = totalMap.get('pos');
  const negEngravings = totalMap.get('neg');

  const posDisplay = Array(...posEngravings.keys()).map((each) => {
    const point = posEngravings.get(each);

    return <EffectBlock key={each} name={each} value={point || 0} />;
  });

  const negDisplay = Array(...negEngravings.keys()).map((each) => {
    const point = negEngravings.get(each);
    return <EffectBlock key={each} name={each} value={point || 0} />;
  });

  return (
    <Card
      variant='outlined'
      style={{
        height: '100%',
        backgroundColor: '#121212',
        color: 'white',
        border: '1px solid white',
      }}
    >
      <CardContent>
        <StyledH2 variant='h4' align='center'>
          Stats
        </StyledH2>
        <StyledP>Engraving Effects</StyledP>
        <List style={{ maxHeight: '185px', overflow: 'auto', padding: 0 }}>
          {posDisplay}
          {negDisplay}
        </List>
        <hr />
        <h4>
          Total Gold: <span>{totalMap.get('price')}</span>
        </h4>
      </CardContent>
    </Card>
  );
};

export default Stats;

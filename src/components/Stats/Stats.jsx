import styled from 'styled-components';
import EffectBlock from './EffectBlock';

const { Card, CardContent } = require('@mui/material');

const StyledH2 = styled.h2`
  margin: 0;
  text-align: center;
`;

const Stats = ({}) => {
  return (
    <Card variant='outlined' style={{ height: '100%' }}>
      <CardContent>
        <StyledH2 variant='h4' align='center'>
          Stats
        </StyledH2>
        <EffectBlock name={'Esoteric Skill Enhancement'} value={15} />
        <hr />
        <h4>
          Total Gold: <span>123</span>
        </h4>
      </CardContent>
    </Card>
  );
};

export default Stats;

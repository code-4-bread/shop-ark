import { Card, CardContent } from '@mui/material';
import styled from 'styled-components';
import Engraving from './Engraving';

const StyledH2 = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  text-align: center;
`;

const EngravingCard = ({
  title,
  showNegative = true,
  showPriceField = true,
  isStone = false,
  state,
  setState,
}) => {
  let marginTop = 0;

  if (!showNegative && !showPriceField) {
    marginTop = '50px';
  } else if (!showNegative || !showPriceField) {
    marginTop = '25px';
  }

  return (
    <Card variant='outlined' style={{ height: '100%' }}>
      <CardContent>
        <StyledH2 align='center'>{title}</StyledH2>
        <div style={{ marginTop: marginTop }}>
          <Engraving
            showNegative={showNegative}
            showPriceField={showPriceField}
            isStone={isStone}
            state={state}
            setState={setState}
            id={title.replace(' ', '').toLowerCase()}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default EngravingCard;

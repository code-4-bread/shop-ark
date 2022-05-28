import { Card, CardContent } from '@mui/material';
import styled from 'styled-components';
import Engraving from './Engraving';

const StyledH2 = styled.h2`
  margin: 0;
  text-align: center;
`;

const StyledBlock = styled.div``;

const EngravingCard = ({
  title,
  showNegative = true,
  showPriceField = true,
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
        <StyledH2 variant='h4' align='center'>
          {title}
        </StyledH2>
        <div style={{ marginTop: marginTop }}>
          <Engraving
            showNegative={showNegative}
            showPriceField={showPriceField}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default EngravingCard;
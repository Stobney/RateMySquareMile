import TilesContainer from './components/tilesContainer'
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const GrandContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  align-items: center;
`

export default function Main() {

  const [ratingObject, setRatingObject] = useState({});

  useEffect(() => {
    setRatingObject(ratingObject);
    console.log(JSON.stringify(ratingObject, null, 2));
  }, [ratingObject])

  return (
    <GrandContainer>
      <TilesContainer
        numRows = {10}
        numColumns = {10}
        setRatingObject = {setRatingObject}
        ratingObject = {ratingObject}
      >
      
      </TilesContainer>
    </GrandContainer>
  );
}

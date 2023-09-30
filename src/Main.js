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

  const [numRows, setRows] = useState(10);
  const [numColumns, setColumns] = useState(10);

  return (
    <GrandContainer>
      <TilesContainer
        numRows = {numRows}
        numColumns = {numColumns}
      >
      
      </TilesContainer>
    </GrandContainer>
  );
}

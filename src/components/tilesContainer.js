import TileRow from './tileRow'
import styled from 'styled-components';

// Gotta keep these in mind, this is how we center everything vertically and horizontally in a div element using flexbox
const TilesContainer = styled.div` 
    display: block;
`

export default function RowsContainer({numRows, numColumns}) {
  return (
    <TilesContainer>
        {(Array(numRows).fill().map((_, i) => i + 1)).map((index) => {
            return (
                <div id='TileRow'>
                    <TileRow
                        key = {index}
                        numColumns = {numColumns}
                    />
                </div>
            )
        })}
    </TilesContainer>
  );
}

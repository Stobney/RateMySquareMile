import Tile from './tile'
import styled from 'styled-components'

// Gotta keep these in mind, this is how we center everything vertically and horizontally in a div element using flexbox
const TileContainer = styled.div` 
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    align-items: center;
`

export default function tileRow({key1, numColumns, setRatingObject, ratingObject}) {
    return (
        <TileContainer>
            {(Array(numColumns).fill().map((_, i) => i + 1)).map((index) => {
                return (
                    <Tile
                        key1 = {key1}
                        key2 = {index}
                        setRatingObject = {setRatingObject}
                        ratingObject = {ratingObject}
                    />
                )
            })}
        </TileContainer>
    )
}
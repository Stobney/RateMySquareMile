import styled from "styled-components"
import { useState, useEffect } from 'react';

const StyleTile = styled.div`
    height: 50px;
    width: 50px;
    margin: 1px;
    border-radius: 4px;
    background-color: white;
    transition: all 0.2s;
    &:hover {
        background-color: #734f96;
    }
    display: flex;
    justify-content: center;
    align-iterms: center;
`

export default function Tile({key1, key2, setRatingObject, ratingObject}) {

    const [rating, setRating] = useState(0);
    const coordinate = key1 + ", " + key2

    return (
        <StyleTile onClick={async () => {
            await setRating(rating + 1);
            await setRatingObject({...ratingObject, 
                [coordinate]: rating
            });
        }}>
            {rating}

        </StyleTile>
    )
}
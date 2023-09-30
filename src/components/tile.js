import styled from "styled-components"

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
`

export default function Tile() {
    return (
        <StyleTile>

        </StyleTile>
    )
}
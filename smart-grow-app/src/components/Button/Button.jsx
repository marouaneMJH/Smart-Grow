import styled from "styled-components";

const mainBackgroundColor = "#5a7422";
const secondBackgroundColor = "#CEFF65";
const Color = "white";

const StyledButton = styled.button`
    background-color: ${mainBackgroundColor};
    color: ${Color};
    border-radius: 7px;
    height: 2.5rem;
    font-weight: bold;
    cursor: pointer;
    border: none;
    transition: all 0.7s ease;
    outline: none;
    width: 17rem;
    &:hover {
        background-color: ${secondBackgroundColor};
        color: black;
    }
`;

function Button(prop) {
    return <StyledButton type={prop.type}>{prop.children}</StyledButton>;
}

export default Button;

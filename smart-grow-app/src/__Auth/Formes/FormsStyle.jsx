import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

// Styled component for the form
export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    width: 40%;
    height: 70%;
    z-index: 1000;
    border: 1.4px solid gray;
    border-radius: 10px;
    background-color: rgba(45, 49, 48, 0.001);
    backdrop-filter: blur(100px);
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
        rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    color: white;
`;

// Styled component for the form control
export const StyledFormControl = styled.div`
    font-size: 10px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
`;

// Styled component for the label inside form control
export const StyledLabel = styled.label`
    margin-right: 20%;
`;

// Styled component for the checkbox inside form control
export const StyledCheckbox = styled.input`
    appearance: none;
    width: 1rem;
    height: 1rem;
    border: 1px solid white;
    border-radius: 0.5rem;
    background: #2d3133;
    cursor: pointer;

    &:checked {
        border: 1px solid white;
        background: #5a7422;
    }
`;
export const StyledLink = styled(Link)`
    color: white;
    &:hover {
        color: grey;
        cursor: pointer;
    }
`;

// Define keyframes animation
export const backgroundMovement = keyframes`
0% {
    background-position: 0% 0%;
}
50% {
    background-position: 100% 100%;
}
100% {
    background-position: 0% 0%;
}
`;

// Styled component with gradient background and animation
export const AnimatedBackground = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg");
    background-size: cover;
    /* background: linear-gradient(to right, #2d3133, #5a7422); */
    /* background-size: 200% 200%; */
    /* animation: ${backgroundMovement} 20s ease infinite; */
`;

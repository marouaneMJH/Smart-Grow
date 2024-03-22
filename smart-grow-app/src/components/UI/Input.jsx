import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
    margin-left: 10px;
    font-size: 1.16rem;
    font-weight: 100;
`;
const StyledInput = styled.input`
    background-color: #d9d9d9;
    margin-top: 4px;
    border: 1px solid grey;
    outline: none;
    background-color: #2d3133;
    color: white;
    font-size: 15px;
    height: 2.5rem;
    width: 17rem;
    border-radius: 7px;
`;

const Input = (props) => {
    return (
        <div>
            <StyledLabel>{props.placeholder}</StyledLabel>
            <br />
            <StyledInput type={props.type} name={props.name} />
        </div>
    );
};

export default Input;

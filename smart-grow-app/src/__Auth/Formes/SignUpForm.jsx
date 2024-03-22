import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/UI/Input";
import {
    StyledForm,
    StyledFormControl,
    StyledLabel,
    StyledCheckbox,
    StyledLink
} from "./FormsStyle";

const SignUpForm = () => (
    <StyledForm className="main-form" form="/sign-up" method="POST">
        <Input type="text" name="username" placeholder="Enter Your email" />
        <Input type="text" name="username" placeholder="Confirm  Your email" />
        <Input type="password" name="password" placeholder="Password" />
        <StyledFormControl>
            <StyledCheckbox type="checkbox" name="checkbox" />
            <StyledLabel>Remember me</StyledLabel>
            <StyledLink to="/sign-in">I have an account</StyledLink>
        </StyledFormControl>
        <Button type="submit">Sign In</Button>
    </StyledForm>
);

export default SignUpForm;

import React from "react";
import Input from "../../components/UI/Input";
import Button from "../../components/Button/Button";
import {
    StyledForm,
    StyledFormControl,
    StyledLabel,
    StyledCheckbox,
    StyledLink
} from "./FormsStyle"; // Import the styled components

const SignInForm = () => (
    <StyledForm className="main-form" form="/sign-in" method="POST">
        <Input type="text" name="username" placeholder="Username" />
        <Input type="password" name="password" placeholder="Password" />
        <StyledFormControl>
            <StyledCheckbox type="checkbox" name="checkbox" />
            <StyledLabel>Remember me</StyledLabel>
            <StyledLink href="#forgot-password">Forget password</StyledLink>
        </StyledFormControl>
        <Button type="submit">Sign In</Button>
    </StyledForm>
);

export default SignInForm;

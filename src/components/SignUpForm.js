/* eslint-disable no-useless-escape */
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/saraigyg/SaraiGonzalezSoftEng1">
        Honeywell-Assesment
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
    /*****HOOKS*****/
    const [username, setUsername] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userPwdConfirmation, setUserPwdConfirmation] = useState("");

    const [usernameErr, setUsernameErr] = useState({});
    const [userEmailErr, setUserEmailErr] = useState({});
    const [userPasswordErr, setUserPasswordErr] = useState({});
    const [userPwdConfirmationErr, setUserPwdConfirmationErr] = useState({});

    /*** handleSubmit after clicking on the sign up button ***/
  const handleSubmit = (event) => {
    event.preventDefault();
    const isFormValid = formValidation();
    if (isFormValid) {
        //send to backend or api, in this case empty the input fields
        setUsername("");
        setUserEmail("");
        setUserPassword("");
        setUserPwdConfirmation("");
    }
  };

  // form validation setting objects for the errors, the regex and conditions
  const formValidation = () => {
    const usernameErr = {};
    const userEmailErr = {};
    const userPasswordErr = {};
    const userPwdConfirmationErr = {};
    let isFormValid = true;
    let userNameRegex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    

    if(username.match(userNameRegex)) {
        usernameErr.usernameWithoutRequirements = "Avoid using empty spaces and/or special characters";
        isFormValid = false;
    }

    if(!userEmail.match(emailRegex)) {
        userEmailErr.userEmailWithoutRequirements = "Avoid using empty spaces and be sure on using @ and .com characters";
        isFormValid = false;
    }

    if(!userPassword.match(passwordRegex)) {
        userPasswordErr.userPasswordWithoutRequirements = "Password must be at least 8 characters long, with at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character";
        isFormValid = false;
        console.log(userPassword, userPasswordErr);
    }

    if(!userPwdConfirmation === userPassword) {
        userPwdConfirmationErr.userPwdConfirmationWithoutRequirements = "Passwords do not match";
        isFormValid = false;
        console.log(userPwdConfirmation, userPassword);
    }

    setUsernameErr(usernameErr);
    setUserEmailErr(userEmailErr);
    setUserPasswordErr(userPasswordErr);
    setUserPwdConfirmationErr(userPwdConfirmationErr);

    return isFormValid;
  }

  // return sign up page with material ui features

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#e70e02" }}></Avatar>
          <Typography component="h1" variant="h5" color={"#e70e02"} fontFamily={"Honeywell Sans, Helvetica, Arial, sans-serif"} 
          fontWeight ={800}>
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                required
                fullWidth
                id="userName"
                label="Username"
                name="userName"
                autoComplete="userName"
                autoFocus
                onChange={(e) => {setUsername(e.target.value)}}
                />
                {Object.keys(usernameErr).map((key) =>{
                    return <div style={{color: "#e70e02", fontFamily: "Honeywell Sans, Helvetica, Arial, sans-serif",
                    fontWeight: 700, fontSize: 12}}>{usernameErr[key]}</div>
                })}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => {setUserEmail(e.target.value)}}
                />
                {Object.keys(userEmailErr).map((key) =>{
                    return <div style={{color: "#e70e02", fontFamily: "Honeywell Sans, Helvetica, Arial, sans-serif",
                    fontWeight: 700, fontSize: 12}}>{userEmailErr[key]}</div>
                })}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) =>{setUserPassword(e.target.value)}}
                />
                {Object.keys(userPasswordErr).map((key) =>{
                    return <div style={{color: "#e70e02", fontFamily: "Honeywell Sans, Helvetica, Arial, sans-serif",
                    fontWeight: 700, fontSize: 12}}>{userPasswordErr[key]}</div>
                })}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="passwordConfirmation"
                  label="Password Confirmation"
                  type="password"
                  id="passwordConfirmation"
                  autoComplete="password-validation"
                  onChange={(e) =>{setUserPwdConfirmation(e.target.value)}}
                />
                {Object.keys(userPwdConfirmationErr).map((key) =>{
                    return <div style={{color: "#e70e02", fontFamily: "Honeywell Sans, Helvetica, Arial, sans-serif",
                    fontWeight: 700, fontSize: 12}}>{userPwdConfirmationErr[key]}</div>
                })}
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive Honeywell news, inspiration and updates via email."
                  style={{color: "black", fontFamily: "Honeywell Sans, Helvetica, Arial, sans-serif", fontSize: 10}}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }} 
              style={{ background: "#e70e02", fontWeight: 800, fontFamily: "Honeywell Sans, Helvetica, Arial, sans-serif"}}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
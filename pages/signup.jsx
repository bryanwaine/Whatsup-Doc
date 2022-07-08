import React, { useEffect, useState } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Head from 'next/head';

import {
  Box,
  Button,
  Card,
  Checkbox,
  CircularProgress,
  Collapse,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  List,
  ListItem,
  Slide,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import TelegramIcon from '@mui/icons-material/Telegram';
import LockIcon from '@mui/icons-material/Lock';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

import { styles } from '../utils/styles';
import wd from '../public/w-d_logo.png';
import google from '../public/google-logo.png';
import patient_icon from '../public/patient-vector.png';
import doctor_icon from '../public/doctor-vector.png';
import business_icon from '../public/office-vector.png';
import { theme } from '../components/Theme';
import { reveal_signup } from '../components/Animations';

const Login = () => {
  const router = useRouter();

  const [signup, setSignup] = useState(true);
  const [patient, setPatient] = useState(false);
  const [doctor, setDoctor] = useState(false);
  const [business, setBusiness] = useState(false);
  const [checkedTerms, setCheckedTerms] = useState(false);

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPasswordInfo, setShowPasswordInfo] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isLowerCase, setIsLowerCase] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);

  function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        isNumericString
      />
    );
  }

  NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  useEffect(() => {
    reveal_signup();
  }, []);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const passwordHintHandler = (e) => {
    const uppercase = new RegExp('(?=.*[A-Z])');
    const lowercase = new RegExp('(?=.*[a-z])');
    const number = new RegExp('(?=.*\\d)');
    const symbol = new RegExp('(?=.*[(\\-+~:=/_\\\\!@#$%^&*.,?)])');

    uppercase.test(e.target.value)
      ? setIsUpperCase(true)
      : setIsUpperCase(false);
    lowercase.test(e.target.value)
      ? setIsLowerCase(true)
      : setIsLowerCase(false);
    number.test(e.target.value) ? setIsNumber(true) : setIsNumber(false);
    symbol.test(e.target.value) ? setIsSymbol(true) : setIsSymbol(false);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={styles.signupContainer}>
      <Head>
        <title>{`Whatsup Doc! | Sign up  `}</title>
        <link rel='icon' type='image/x-icon' href='/w-d_logo_thumb.png' />
        <meta name='description' content='Login to your account'></meta>
      </Head>

      <Box sx={styles.signupTransbox}>
        <Box sx={styles.signupForm} className={`reveal_signup  `}>
          <form
            // onSubmit={handleSubmit(submitHandler)} className={classes.form}
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card
              raised={true}
              sx={{
                width: { xs: '80%', md: '30%' },
                height: { xs: '90%', md: '100%' },
                padding: '.5rem 1rem ',
                borderRadius: '.5rem',
                margin: '1rem 0',
                overflowY: 'auto',
                overflowX: 'none',
              }}
            >
              <Slide
                direction='down'
                mountOnEnter
                unmountOnExit
                in={signup}
                sx={styles.signupFormList}
              >
                <List>
                  <ListItem>
                    <Box
                      sx={{
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                      }}
                      onClick={() => router.push('/')}
                    >
                      <Image
                        src={wd}
                        width={300}
                        height={55}
                        alt='Whatsup Doc!'
                      />
                    </Box>
                  </ListItem>

                  <ListItem
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      width: '100%',
                      margin: { xs: '1rem 0 0 0', md: '2rem 0 0 0' },
                    }}
                  >
                    <Typography
                      component='h1'
                      variant='bold'
                      sx={{
                        fontWeight: '400',
                        fontSize: { xs: '1rem', md: '1.2rem' },
                        color: theme.palette.secondary.main,
                        textAlign: 'center',
                      }}
                    >
                      Sign up now to access quality healthcare at your own
                      convinience with Whatsup Doc!&#8482;
                    </Typography>
                  </ListItem>

                  <ListItem
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      width: '100%',
                      margin: { xs: '0 0 1rem 0', md: '0 0 2rem 0' },
                    }}
                  >
                    <Typography
                      component='h1'
                      variant='bold'
                      sx={{
                        fontWeight: '200',
                        fontSize: { xs: '.8rem', md: '1rem' },
                        color: theme.palette.secondary.main,
                        textAlign: 'center',
                      }}
                    >
                      We offer an array of affordable healthcare services to
                      cater for your health needs from the comfort of your home.
                    </Typography>
                  </ListItem>

                  <ListItem>
                    <Typography
                      variant='medium'
                      component='p'
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: { xs: '.8rem', md: '1rem' },
                        color: '#A812DD',
                        border: `1px solid ${theme.palette.primary.main}`,
                        width: '100%',
                        borderRadius: '.5rem',
                        padding: '.5rem 0',
                        cursor: 'pointer',
                        transition: '0.5s all ease-out',
                        '&:hover': {
                          backgroundColor: '#A812DD',
                          color: '#ffffff',
                          border: `1px solid #A812DD`,
                        },
                      }}
                      onClick={() => {
                        setPatient(true);
                        setSignup(false);
                      }}
                    >
                      <Box
                        sx={{
                          margin: '0 .5rem 0 0',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Image
                          src={patient_icon}
                          width={25}
                          height={25}
                          alt='Patient icon'
                        />
                      </Box>
                      Sign up as a Patient
                    </Typography>
                  </ListItem>

                  <ListItem>
                    <Typography
                      variant='medium'
                      component='p'
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: { xs: '.8rem', md: '1rem' },
                        color: '#FAD24D',
                        border: `1px solid ${theme.palette.primary.main}`,
                        width: '100%',
                        borderRadius: '.5rem',
                        padding: '.5rem 0',
                        cursor: 'pointer',
                        transition: '0.5s all ease-out',
                        '&:hover': {
                          backgroundColor: '#FAD24D',
                          color: '#ffffff',
                          border: `1px solid #FAD24D`,
                        },
                      }}
                      onClick={() => {
                        setDoctor(true);
                        setSignup(false);
                      }}
                    >
                      <Box
                        sx={{
                          margin: '0 .5rem 0 0',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Image
                          src={doctor_icon}
                          width={25}
                          height={25}
                          alt='Doctor icon'
                        />
                      </Box>
                      Sign up as a Doctor
                    </Typography>
                  </ListItem>

                  <ListItem>
                    <Typography
                      variant='medium'
                      component='p'
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: { xs: '.8rem', md: '1rem' },
                        color: '#018E98',
                        border: `1px solid ${theme.palette.primary.main}`,
                        width: '100%',
                        borderRadius: '.5rem',
                        padding: '.5rem 0',
                        cursor: 'pointer',
                        transition: '0.5s all ease-out',
                        '&:hover': {
                          backgroundColor: '#018E98',
                          color: '#ffffff',
                          border: `1px solid #018E98`,
                        },
                      }}
                      onClick={() => {
                        setBusiness(true);
                        setSignup(false);
                      }}
                    >
                      <Box
                        sx={{
                          margin: '0 .5rem 0 0',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Image
                          src={business_icon}
                          width={25}
                          height={25}
                          alt='Office icon'
                        />
                      </Box>
                      Sign up as a Business
                    </Typography>
                  </ListItem>

                  <ListItem
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      variant='medium'
                      component='h2'
                      sx={{
                        fontWeight: '200',
                        fontSize: { xs: '.8rem', md: '1rem' },
                      }}
                    >
                      Already have an account?&nbsp;
                    </Typography>
                    <Typography
                      variant='medium'
                      component='h2'
                      sx={{
                        fontWeight: '300',
                        fontSize: { xs: '.8rem', md: '1rem' },
                        color: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                        cursor: 'pointer',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                      onClick={() => {
                        router.push('/login');
                      }}
                    >
                      Login
                    </Typography>
                  </ListItem>
                </List>
              </Slide>

              {/* Patient Sign up */}
              <Slide
                direction='up'
                mountOnEnter
                unmountOnExit
                in={patient}
                sx={styles.signupFormList}
                className={`patientForm ${patient}`}
              >
                <List>
                  <ListItem>
                    <Box
                      sx={{
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                      }}
                      onClick={() => router.push('/')}
                    >
                      <Image
                        src={wd}
                        width={300}
                        height={55}
                        alt='Whatsup Doc!'
                      />
                    </Box>
                  </ListItem>

                  <ListItem
                    sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      variant='medium'
                      component='h2'
                      sx={styles.backButton}
                      onClick={() => {
                        setPatient(false);
                        setSignup(true);
                      }}
                    >
                      <ArrowBackRoundedIcon sx={{ margin: '0 .5rem 0 0' }} />
                      Back
                    </Typography>
                  </ListItem>

                  <ListItem
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      width: '100%',
                    }}
                  >
                    <Typography
                      component='h1'
                      variant='bold'
                      sx={{
                        fontWeight: '200',
                        fontSize: { xs: '1rem', md: '1.5rem' },
                        color: theme.palette.secondary.main,
                      }}
                    >
                      Patient Sign up
                    </Typography>
                  </ListItem>

                  <ListItem>
                    <Typography
                      variant='medium'
                      component='p'
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: { xs: '.8rem', md: '1rem' },
                        color: theme.palette.primary.main,
                        border: `1px solid ${theme.palette.primary.main}`,
                        width: '100%',
                        borderRadius: '.5rem',
                        padding: '.5rem 0',
                        cursor: 'pointer',
                        transition: '0.5s all ease-out',
                        '&:hover': {
                          backgroundColor: theme.palette.primary.light,
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          margin: '0 .5rem 0 0',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Image
                          src={google}
                          width={25}
                          height={25}
                          alt='Google'
                        />
                      </Box>
                      Sign up with Google
                    </Typography>
                  </ListItem>
                  <ListItem
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '50%',
                        height: '1px',
                        backgroundColor: '#cccccc',
                      }}
                    />
                    <Typography
                      variant='regular'
                      component='p'
                      sx={{
                        margin: '0 .5rem',
                        fontSize: { xs: '.8rem', md: '1rem' },
                      }}
                    >
                      OR
                    </Typography>
                    <div
                      style={{
                        width: '50%',
                        height: '1px',
                        backgroundColor: '#cccccc',
                      }}
                    />
                  </ListItem>
                  <ListItem>
                    <Controller
                      name='firstName'
                      control={control}
                      defaultValue=''
                      render={({ field }) => (
                        <TextField
                          InputProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                            startAdornment: (
                              <InputAdornment position='start'>
                                <IconButton>
                                  <PersonRoundedIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          InputLabelProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                          }}
                          variant='outlined'
                          fullWidth
                          id='firstName'
                          label='First Name'
                          inputProps={{ type: 'text' }}
                          error={Boolean(errors.firstName)}
                          helperText={errors.firstName?.message}
                          {...field}
                        />
                      )}
                    />
                  </ListItem>
                  <ListItem>
                    <Controller
                      name='lastName'
                      control={control}
                      defaultValue=''
                      render={({ field }) => (
                        <TextField
                          InputProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                            startAdornment: (
                              <InputAdornment position='start'>
                                <IconButton>
                                  <PersonAddAlt1RoundedIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          InputLabelProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                          }}
                          variant='outlined'
                          fullWidth
                          id='lastName'
                          label='Last Name'
                          inputProps={{ type: 'text' }}
                          error={Boolean(errors.lastName)}
                          helperText={errors.lastName?.message}
                          {...field}
                        />
                      )}
                    />
                  </ListItem>

                  <ListItem>
                    <Controller
                      name='email'
                      control={control}
                      defaultValue=''
                      rules={{
                        required: true,
                        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      }}
                      render={({ field }) => (
                        <TextField
                          InputProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                            startAdornment: (
                              <InputAdornment position='start'>
                                <IconButton>
                                  <MailRoundedIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          InputLabelProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                          }}
                          variant='outlined'
                          fullWidth
                          id='email'
                          label='Email'
                          inputProps={{ type: 'email' }}
                          error={Boolean(errors.email)}
                          helperText={
                            errors.email
                              ? errors.email.type === 'pattern'
                                ? 'Email is not valid'
                                : 'Email is required'
                              : null
                          }
                          {...field}
                        />
                      )}
                    />
                  </ListItem>

                  <ListItem>
                    <Controller
                      name='phone'
                      control={control}
                      defaultValue=''
                      render={({ field }) => (
                        <TextField
                          InputProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                            startAdornment: (
                              <InputAdornment position='start'>
                                <IconButton>
                                  <PhoneIphoneRoundedIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          InputLabelProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                          }}
                          variant='outlined'
                          fullWidth
                          id='phone'
                          label='Phone Number'
                          inputProps={{ inputComponent: NumberFormatCustom }}
                          error={Boolean(errors.phone)}
                          helperText={errors.phone?.message}
                          {...field}
                        />
                      )}
                    />
                  </ListItem>

                  <ListItem>
                    <Controller
                      name='password'
                      control={control}
                      defaultValue=''
                      render={({ field }) => (
                        <TextField
                          variant='outlined'
                          fullWidth
                          onInput={(e) => {
                            setInputValue(e.target.value);
                            passwordHintHandler(e);
                          }}
                          id='password'
                          label='Password'
                          onFocus={() => setShowPasswordInfo(true)}
                          onBlur={() => setShowPasswordInfo(false)}
                          autoComplete='new-password'
                          error={Boolean(errors.password)}
                          helperText={errors.password?.message}
                          {...field}
                          InputProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                            startAdornment: (
                              <InputAdornment position='start'>
                                <IconButton>
                                  <LockIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position='end'>
                                <IconButton
                                  aria-label='toggle password visibility'
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge='end'
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                            type: showPassword ? 'text' : 'password',
                          }}
                          InputLabelProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                          }}
                        />
                      )}
                    />
                  </ListItem>

                  {showPasswordInfo ? (
                    <ListItem>
                      <div>
                        <span style={{ display: 'flex', margin: 0 }}>
                          <Typography
                            variant='h6'
                            style={{
                              margin: '0 0 0 5px',
                              fontSize: '0.7rem',
                              color: '#aaaaaa',
                            }}
                          >
                            Your password must contian:
                          </Typography>
                        </span>
                        <span style={{ display: 'flex', margin: 0 }}>
                          {inputValue.length < 8 ? (
                            <CancelIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#ff0000' }}
                            />
                          ) : (
                            <CheckCircleIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#12b370' }}
                            />
                          )}
                          <Typography
                            variant='h6'
                            style={{
                              margin: '0 0 0 5px',
                              fontSize: '0.7rem',
                              color:
                                inputValue.length < 8 ? '#ff0000' : '#12b370',
                            }}
                          >
                            8 characters minimum
                          </Typography>
                        </span>
                        <span style={{ display: 'flex', margin: 0 }}>
                          {isUpperCase ? (
                            <CheckCircleIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#12b370' }}
                            />
                          ) : (
                            <CancelIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#ff0000' }}
                            />
                          )}
                          <Typography
                            variant='h6'
                            style={{
                              margin: '0 0 0 5px',
                              fontSize: '0.7rem',
                              color: isUpperCase ? '#12b370' : '#ff0000',
                            }}
                          >
                            uppercase letters
                          </Typography>
                        </span>
                        <span style={{ display: 'flex', margin: 0 }}>
                          {isLowerCase ? (
                            <CheckCircleIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#12b370' }}
                            />
                          ) : (
                            <CancelIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#ff0000' }}
                            />
                          )}
                          <Typography
                            variant='h6'
                            style={{
                              margin: '0 0 0 5px',
                              fontSize: '0.7rem',
                              color: isLowerCase ? '#12b370' : '#ff0000',
                            }}
                          >
                            lowercase letters
                          </Typography>
                        </span>
                        <span style={{ display: 'flex', margin: 0 }}>
                          {isNumber ? (
                            <CheckCircleIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#12b370' }}
                            />
                          ) : (
                            <CancelIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#ff0000' }}
                            />
                          )}
                          <Typography
                            variant='h6'
                            style={{
                              margin: '0 0 0 5px',
                              fontSize: '0.7rem',
                              color: isNumber ? '#12b370' : '#ff0000',
                            }}
                          >
                            numbers
                          </Typography>
                        </span>
                        <span style={{ display: 'flex', margin: 0 }}>
                          {isSymbol ? (
                            <CheckCircleIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#12b370' }}
                            />
                          ) : (
                            <CancelIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#ff0000' }}
                            />
                          )}
                          <Typography
                            variant='h6'
                            style={{
                              margin: '0 0 0 5px',
                              fontSize: '0.7rem',
                              color: isSymbol ? '#12b370' : '#ff0000',
                            }}
                          >
                            special characters
                          </Typography>
                        </span>
                      </div>
                    </ListItem>
                  ) : null}

                  <ListItem>
                    <Controller
                      name='confirmPassword'
                      control={control}
                      defaultValue=''
                      render={({ field }) => (
                        <TextField
                          variant='outlined'
                          fullWidth
                          id='confirmPassword'
                          label='Confirm Password'
                          error={Boolean(errors.confirmPassword)}
                          helperText={errors.confirmPassword?.message}
                          {...field}
                          InputProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                            startAdornment: (
                              <InputAdornment position='start'>
                                <IconButton>
                                  <EnhancedEncryptionIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position='end'>
                                <IconButton
                                  aria-label='toggle password visibility'
                                  onClick={handleClickShowConfirmPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge='end'
                                >
                                  {showConfirmPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                            type: showConfirmPassword ? 'text' : 'password',
                          }}
                          InputLabelProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                          }}
                        />
                      )}
                    />
                  </ListItem>

                  <ListItem>
                    <FormControlLabel
                      label=''
                      control={
                        <Checkbox
                          onClick={(e) => setCheckedTerms(e.target.checked)}
                          checked={checkedTerms}
                          name='Terms and Conditions'
                          sx={{
                            '&.Mui-checked': {
                              color: theme.palette.primary.main,
                            },
                          }}
                        />
                      }
                    />

                    <Typography
                      variant='regular'
                      component='p'
                      sx={{
                        fontSize: { xs: '.7rem', md: '.9rem' },
                      }}
                    >
                      I agree to the Whatsup Doc!&#8482;
                      <br />
                      <Typography
                        variant='regular'
                        component='span'
                        sx={{
                          color: theme.palette.primary.main,
                          cursor: 'pointer',
                          '&:hover': {
                            textDecoration: 'underline',
                          },
                        }}
                      >
                        Terms&nbsp;&amp;&nbsp;Conditions
                      </Typography>
                    </Typography>
                  </ListItem>

                  <ListItem
                    style={{ display: 'flex', justifyContent: 'center' }}
                  >
                    {loading ? (
                      <div className={classes.buttonLoading}>
                        <CircularProgress />
                      </div>
                    ) : (
                      <Button
                        fullWidth
                        variant='text'
                        color='primary'
                        type='submit'
                        sx={{ padding: 0 }}
                      >
                        <Typography
                          variant='medium'
                          component='p'
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: { xs: '.8rem', md: '1rem' },
                            color: '#ffffff',
                            backgroundColor: theme.palette.primary.main,
                            border: `1px solid ${theme.palette.primary.main}`,
                            width: '100%',
                            borderRadius: '.5rem',
                            padding: '.5rem 0',
                            transition: '0.5s all ease-out',
                            '&:hover': {
                              backgroundColor: theme.palette.primary.light,
                              color: theme.palette.primary.main,
                              border: `1px solid ${theme.palette.primary.main}`,
                            },
                          }}
                        >
                          <TelegramIcon sx={{ margin: '0 .5rem 0 0' }} />
                          Sign up
                        </Typography>
                      </Button>
                    )}
                  </ListItem>

                  <ListItem
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '0 0 2rem 0',
                    }}
                  >
                    <Typography
                      variant='medium'
                      component='h2'
                      sx={{
                        fontWeight: '200',
                        fontSize: { xs: '.8rem', md: '1rem' },
                      }}
                    >
                      Already have an account?&nbsp;
                    </Typography>
                    <Typography
                      variant='medium'
                      component='h2'
                      sx={{
                        fontWeight: '300',
                        fontSize: { xs: '.8rem', md: '1rem' },
                        color: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                        cursor: 'pointer',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                      onClick={() => {
                        router.push('/login');
                      }}
                    >
                      Login
                    </Typography>
                  </ListItem>
                </List>
              </Slide>

              {/* Doctor Sign up */}
              <Slide
                direction='up'
                mountOnEnter
                unmountOnExit
                in={doctor}
                sx={styles.signupFormList}
              >
                <List>
                  <ListItem>
                    <Box
                      sx={{
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                      }}
                      onClick={() => router.push('/')}
                    >
                      <Image
                        src={wd}
                        width={300}
                        height={55}
                        alt='Whatsup Doc!'
                      />
                    </Box>
                  </ListItem>

                  <ListItem
                    sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      variant='medium'
                      component='h2'
                      sx={styles.backButton}
                      onClick={() => {
                        setDoctor(false);
                        setSignup(true);
                      }}
                    >
                      <ArrowBackRoundedIcon sx={{ margin: '0 .5rem 0 0' }} />
                      Back
                    </Typography>
                  </ListItem>

                  <ListItem
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      width: '100%',
                    }}
                  >
                    <Typography
                      component='h1'
                      variant='bold'
                      sx={{
                        fontWeight: '200',
                        fontSize: { xs: '1rem', md: '1.5rem' },
                        color: theme.palette.secondary.main,
                      }}
                    >
                      Doctor Sign up
                    </Typography>
                  </ListItem>

                  <ListItem>
                    <Typography
                      variant='medium'
                      component='p'
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: { xs: '.8rem', md: '1rem' },
                        color: theme.palette.primary.main,
                        border: `1px solid ${theme.palette.primary.main}`,
                        width: '100%',
                        borderRadius: '.5rem',
                        padding: '.5rem 0',
                        cursor: 'pointer',
                        transition: '0.5s all ease-out',
                        '&:hover': {
                          backgroundColor: theme.palette.primary.light,
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          margin: '0 .5rem 0 0',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Image
                          src={google}
                          width={25}
                          height={25}
                          alt='Google'
                        />
                      </Box>
                      Sign up with Google
                    </Typography>
                  </ListItem>
                  <ListItem
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '50%',
                        height: '1px',
                        backgroundColor: '#cccccc',
                      }}
                    />
                    <Typography
                      variant='regular'
                      component='p'
                      sx={{
                        margin: '0 .5rem',
                        fontSize: { xs: '.8rem', md: '1rem' },
                      }}
                    >
                      OR
                    </Typography>
                    <div
                      style={{
                        width: '50%',
                        height: '1px',
                        backgroundColor: '#cccccc',
                      }}
                    />
                  </ListItem>
                  <ListItem>
                    <Controller
                      name='firstName'
                      control={control}
                      defaultValue=''
                      render={({ field }) => (
                        <TextField
                          InputProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                            startAdornment: (
                              <InputAdornment position='start'>
                                <IconButton>
                                  <PersonRoundedIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          InputLabelProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                          }}
                          variant='outlined'
                          fullWidth
                          id='firstName'
                          label='First Name'
                          inputProps={{ type: 'text' }}
                          error={Boolean(errors.firstName)}
                          helperText={errors.firstName?.message}
                          {...field}
                        />
                      )}
                    />
                  </ListItem>
                  <ListItem>
                    <Controller
                      name='lastName'
                      control={control}
                      defaultValue=''
                      render={({ field }) => (
                        <TextField
                          InputProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                            startAdornment: (
                              <InputAdornment position='start'>
                                <IconButton>
                                  <PersonAddAlt1RoundedIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          InputLabelProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                          }}
                          variant='outlined'
                          fullWidth
                          id='lastName'
                          label='Last Name'
                          inputProps={{ type: 'text' }}
                          error={Boolean(errors.lastName)}
                          helperText={errors.lastName?.message}
                          {...field}
                        />
                      )}
                    />
                  </ListItem>

                  <ListItem>
                    <Controller
                      name='email'
                      control={control}
                      defaultValue=''
                      rules={{
                        required: true,
                        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      }}
                      render={({ field }) => (
                        <TextField
                          InputProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                            startAdornment: (
                              <InputAdornment position='start'>
                                <IconButton>
                                  <MailRoundedIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          InputLabelProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                          }}
                          variant='outlined'
                          fullWidth
                          id='email'
                          label='Email'
                          inputProps={{ type: 'email' }}
                          error={Boolean(errors.email)}
                          helperText={
                            errors.email
                              ? errors.email.type === 'pattern'
                                ? 'Email is not valid'
                                : 'Email is required'
                              : null
                          }
                          {...field}
                        />
                      )}
                    />
                  </ListItem>

                  <ListItem>
                    <Controller
                      name='phone'
                      control={control}
                      defaultValue=''
                      render={({ field }) => (
                        <TextField
                          InputProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                            startAdornment: (
                              <InputAdornment position='start'>
                                <IconButton>
                                  <PhoneIphoneRoundedIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          InputLabelProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                          }}
                          variant='outlined'
                          fullWidth
                          id='phone'
                          label='Phone Number'
                          inputProps={{ inputComponent: NumberFormatCustom }}
                          error={Boolean(errors.phone)}
                          helperText={errors.phone?.message}
                          {...field}
                        />
                      )}
                    />
                  </ListItem>

                  <ListItem>
                    <Controller
                      name='password'
                      control={control}
                      defaultValue=''
                      render={({ field }) => (
                        <TextField
                          variant='outlined'
                          fullWidth
                          onInput={(e) => {
                            setInputValue(e.target.value);
                            passwordHintHandler(e);
                          }}
                          id='password'
                          label='Password'
                          onFocus={() => setShowPasswordInfo(true)}
                          onBlur={() => setShowPasswordInfo(false)}
                          autoComplete='new-password'
                          error={Boolean(errors.password)}
                          helperText={errors.password?.message}
                          {...field}
                          InputProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                            startAdornment: (
                              <InputAdornment position='start'>
                                <IconButton>
                                  <LockIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position='end'>
                                <IconButton
                                  aria-label='toggle password visibility'
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge='end'
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                            type: showPassword ? 'text' : 'password',
                          }}
                          InputLabelProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                          }}
                        />
                      )}
                    />
                  </ListItem>

                  {showPasswordInfo ? (
                    <ListItem>
                      <div>
                        <span style={{ display: 'flex', margin: 0 }}>
                          <Typography
                            variant='h6'
                            style={{
                              margin: '0 0 0 5px',
                              fontSize: '0.7rem',
                              color: '#aaaaaa',
                            }}
                          >
                            Your password must contian:
                          </Typography>
                        </span>
                        <span style={{ display: 'flex', margin: 0 }}>
                          {inputValue.length < 8 ? (
                            <CancelIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#ff0000' }}
                            />
                          ) : (
                            <CheckCircleIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#12b370' }}
                            />
                          )}
                          <Typography
                            variant='h6'
                            style={{
                              margin: '0 0 0 5px',
                              fontSize: '0.7rem',
                              color:
                                inputValue.length < 8 ? '#ff0000' : '#12b370',
                            }}
                          >
                            8 characters minimum
                          </Typography>
                        </span>
                        <span style={{ display: 'flex', margin: 0 }}>
                          {isUpperCase ? (
                            <CheckCircleIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#12b370' }}
                            />
                          ) : (
                            <CancelIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#ff0000' }}
                            />
                          )}
                          <Typography
                            variant='h6'
                            style={{
                              margin: '0 0 0 5px',
                              fontSize: '0.7rem',
                              color: isUpperCase ? '#12b370' : '#ff0000',
                            }}
                          >
                            uppercase letters
                          </Typography>
                        </span>
                        <span style={{ display: 'flex', margin: 0 }}>
                          {isLowerCase ? (
                            <CheckCircleIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#12b370' }}
                            />
                          ) : (
                            <CancelIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#ff0000' }}
                            />
                          )}
                          <Typography
                            variant='h6'
                            style={{
                              margin: '0 0 0 5px',
                              fontSize: '0.7rem',
                              color: isLowerCase ? '#12b370' : '#ff0000',
                            }}
                          >
                            lowercase letters
                          </Typography>
                        </span>
                        <span style={{ display: 'flex', margin: 0 }}>
                          {isNumber ? (
                            <CheckCircleIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#12b370' }}
                            />
                          ) : (
                            <CancelIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#ff0000' }}
                            />
                          )}
                          <Typography
                            variant='h6'
                            style={{
                              margin: '0 0 0 5px',
                              fontSize: '0.7rem',
                              color: isNumber ? '#12b370' : '#ff0000',
                            }}
                          >
                            numbers
                          </Typography>
                        </span>
                        <span style={{ display: 'flex', margin: 0 }}>
                          {isSymbol ? (
                            <CheckCircleIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#12b370' }}
                            />
                          ) : (
                            <CancelIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#ff0000' }}
                            />
                          )}
                          <Typography
                            variant='h6'
                            style={{
                              margin: '0 0 0 5px',
                              fontSize: '0.7rem',
                              color: isSymbol ? '#12b370' : '#ff0000',
                            }}
                          >
                            special characters
                          </Typography>
                        </span>
                      </div>
                    </ListItem>
                  ) : null}

                  <ListItem>
                    <Controller
                      name='confirmPassword'
                      control={control}
                      defaultValue=''
                      render={({ field }) => (
                        <TextField
                          variant='outlined'
                          fullWidth
                          id='confirmPassword'
                          label='Confirm Password'
                          error={Boolean(errors.confirmPassword)}
                          helperText={errors.confirmPassword?.message}
                          {...field}
                          InputProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                            startAdornment: (
                              <InputAdornment position='start'>
                                <IconButton>
                                  <EnhancedEncryptionIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position='end'>
                                <IconButton
                                  aria-label='toggle password visibility'
                                  onClick={handleClickShowConfirmPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge='end'
                                >
                                  {showConfirmPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                            type: showConfirmPassword ? 'text' : 'password',
                          }}
                          InputLabelProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                          }}
                        />
                      )}
                    />
                  </ListItem>

                  <ListItem>
                    <FormControlLabel
                      label=''
                      control={
                        <Checkbox
                          onClick={(e) => setCheckedTerms(e.target.checked)}
                          checked={checkedTerms}
                          name='Terms and Conditions'
                          sx={{
                            '&.Mui-checked': {
                              color: theme.palette.primary.main,
                            },
                          }}
                        />
                      }
                    />

                    <Typography
                      variant='regular'
                      component='p'
                      sx={{
                        fontSize: { xs: '.7rem', md: '.9rem' },
                      }}
                    >
                      I agree to the Whatsup Doc!&#8482;
                      <br />
                      <Typography
                        variant='regular'
                        component='span'
                        sx={{
                          color: theme.palette.primary.main,
                          cursor: 'pointer',
                          '&:hover': {
                            textDecoration: 'underline',
                          },
                        }}
                      >
                        Terms&nbsp;&amp;&nbsp;Conditions
                      </Typography>
                    </Typography>
                  </ListItem>

                  <ListItem
                    style={{ display: 'flex', justifyContent: 'center' }}
                  >
                    {loading ? (
                      <div className={classes.buttonLoading}>
                        <CircularProgress />
                      </div>
                    ) : (
                      <Button
                        fullWidth
                        variant='text'
                        color='primary'
                        type='submit'
                        sx={{ padding: 0 }}
                      >
                        <Typography
                          variant='medium'
                          component='p'
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: { xs: '.8rem', md: '1rem' },
                            color: '#ffffff',
                            backgroundColor: theme.palette.primary.main,
                            border: `1px solid ${theme.palette.primary.main}`,
                            width: '100%',
                            borderRadius: '.5rem',
                            padding: '.5rem 0',
                            transition: '0.5s all ease-out',
                            '&:hover': {
                              backgroundColor: theme.palette.primary.light,
                              color: theme.palette.primary.main,
                              border: `1px solid ${theme.palette.primary.main}`,
                            },
                          }}
                        >
                          <TelegramIcon sx={{ margin: '0 .5rem 0 0' }} />
                          Sign up
                        </Typography>
                      </Button>
                    )}
                  </ListItem>

                  <ListItem
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '0 0 2rem 0',
                    }}
                  >
                    <Typography
                      variant='medium'
                      component='h2'
                      sx={{
                        fontWeight: '200',
                        fontSize: { xs: '.8rem', md: '1rem' },
                      }}
                    >
                      Already have an account?&nbsp;
                    </Typography>
                    <Typography
                      variant='medium'
                      component='h2'
                      sx={{
                        fontWeight: '300',
                        fontSize: { xs: '.8rem', md: '1rem' },
                        color: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                        cursor: 'pointer',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                      onClick={() => {
                        router.push('/login');
                      }}
                    >
                      Login
                    </Typography>
                  </ListItem>
                </List>
              </Slide>

              {/* Business Sign up */}
              <Slide
                direction='up'
                mountOnEnter
                unmountOnExit
                in={business}
                sx={styles.signupFormList}
              >
                <List>
                  <ListItem>
                    <Box
                      sx={{
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                      }}
                      onClick={() => router.push('/')}
                    >
                      <Image
                        src={wd}
                        width={300}
                        height={55}
                        alt='Whatsup Doc!'
                      />
                    </Box>
                  </ListItem>

                  <ListItem
                    sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      variant='medium'
                      component='h2'
                      sx={styles.backButton}
                      onClick={() => {
                        setBusiness(false);
                        setSignup(true);
                      }}
                    >
                      <ArrowBackRoundedIcon sx={{ margin: '0 .5rem 0 0' }} />
                      Back
                    </Typography>
                  </ListItem>

                  <ListItem
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      width: '100%',
                    }}
                  >
                    <Typography
                      component='h1'
                      variant='bold'
                      sx={{
                        fontWeight: '200',
                        fontSize: { xs: '1rem', md: '1.5rem' },
                        color: theme.palette.secondary.main,
                      }}
                    >
                      Business Sign up
                    </Typography>
                  </ListItem>

                  <ListItem>
                    <Typography
                      variant='medium'
                      component='p'
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: { xs: '.8rem', md: '1rem' },
                        color: theme.palette.primary.main,
                        border: `1px solid ${theme.palette.primary.main}`,
                        width: '100%',
                        borderRadius: '.5rem',
                        padding: '.5rem 0',
                        cursor: 'pointer',
                        transition: '0.5s all ease-out',
                        '&:hover': {
                          backgroundColor: theme.palette.primary.light,
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          margin: '0 .5rem 0 0',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Image
                          src={google}
                          width={25}
                          height={25}
                          alt='Google'
                        />
                      </Box>
                      Sign up with Google
                    </Typography>
                  </ListItem>
                  <ListItem
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '50%',
                        height: '1px',
                        backgroundColor: '#cccccc',
                      }}
                    />
                    <Typography
                      variant='regular'
                      component='p'
                      sx={{
                        margin: '0 .5rem',
                        fontSize: { xs: '.8rem', md: '1rem' },
                      }}
                    >
                      OR
                    </Typography>
                    <div
                      style={{
                        width: '50%',
                        height: '1px',
                        backgroundColor: '#cccccc',
                      }}
                    />
                  </ListItem>
                  <ListItem>
                    <Controller
                      name='firstName'
                      control={control}
                      defaultValue=''
                      render={({ field }) => (
                        <TextField
                          InputProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                            startAdornment: (
                              <InputAdornment position='start'>
                                <IconButton>
                                  <PersonRoundedIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          InputLabelProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                          }}
                          variant='outlined'
                          fullWidth
                          id='firstName'
                          label='First Name'
                          inputProps={{ type: 'text' }}
                          error={Boolean(errors.firstName)}
                          helperText={errors.firstName?.message}
                          {...field}
                        />
                      )}
                    />
                  </ListItem>
                  <ListItem>
                    <Controller
                      name='lastName'
                      control={control}
                      defaultValue=''
                      render={({ field }) => (
                        <TextField
                          InputProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                            startAdornment: (
                              <InputAdornment position='start'>
                                <IconButton>
                                  <PersonAddAlt1RoundedIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          InputLabelProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                          }}
                          variant='outlined'
                          fullWidth
                          id='lastName'
                          label='Last Name'
                          inputProps={{ type: 'text' }}
                          error={Boolean(errors.lastName)}
                          helperText={errors.lastName?.message}
                          {...field}
                        />
                      )}
                    />
                  </ListItem>

                  <ListItem>
                    <Controller
                      name='email'
                      control={control}
                      defaultValue=''
                      rules={{
                        required: true,
                        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      }}
                      render={({ field }) => (
                        <TextField
                          InputProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                            startAdornment: (
                              <InputAdornment position='start'>
                                <IconButton>
                                  <MailRoundedIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          InputLabelProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                          }}
                          variant='outlined'
                          fullWidth
                          id='email'
                          label='Email'
                          inputProps={{ type: 'email' }}
                          error={Boolean(errors.email)}
                          helperText={
                            errors.email
                              ? errors.email.type === 'pattern'
                                ? 'Email is not valid'
                                : 'Email is required'
                              : null
                          }
                          {...field}
                        />
                      )}
                    />
                  </ListItem>

                  <ListItem>
                    <Controller
                      name='phone'
                      control={control}
                      defaultValue=''
                      render={({ field }) => (
                        <TextField
                          InputProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                            startAdornment: (
                              <InputAdornment position='start'>
                                <IconButton>
                                  <PhoneIphoneRoundedIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          InputLabelProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                          }}
                          variant='outlined'
                          fullWidth
                          id='phone'
                          label='Phone Number'
                          inputProps={{ inputComponent: NumberFormatCustom }}
                          error={Boolean(errors.phone)}
                          helperText={errors.phone?.message}
                          {...field}
                        />
                      )}
                    />
                  </ListItem>

                  <ListItem>
                    <Controller
                      name='password'
                      control={control}
                      defaultValue=''
                      render={({ field }) => (
                        <TextField
                          variant='outlined'
                          fullWidth
                          onInput={(e) => {
                            setInputValue(e.target.value);
                            passwordHintHandler(e);
                          }}
                          id='password'
                          label='Password'
                          onFocus={() => setShowPasswordInfo(true)}
                          onBlur={() => setShowPasswordInfo(false)}
                          autoComplete='new-password'
                          error={Boolean(errors.password)}
                          helperText={errors.password?.message}
                          {...field}
                          InputProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                            startAdornment: (
                              <InputAdornment position='start'>
                                <IconButton>
                                  <LockIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position='end'>
                                <IconButton
                                  aria-label='toggle password visibility'
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge='end'
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                            type: showPassword ? 'text' : 'password',
                          }}
                          InputLabelProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                          }}
                        />
                      )}
                    />
                  </ListItem>

                  {showPasswordInfo ? (
                    <ListItem>
                      <div>
                        <span style={{ display: 'flex', margin: 0 }}>
                          <Typography
                            variant='h6'
                            style={{
                              margin: '0 0 0 5px',
                              fontSize: '0.7rem',
                              color: '#aaaaaa',
                            }}
                          >
                            Your password must contian:
                          </Typography>
                        </span>
                        <span style={{ display: 'flex', margin: 0 }}>
                          {inputValue.length < 8 ? (
                            <CancelIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#ff0000' }}
                            />
                          ) : (
                            <CheckCircleIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#12b370' }}
                            />
                          )}
                          <Typography
                            variant='h6'
                            style={{
                              margin: '0 0 0 5px',
                              fontSize: '0.7rem',
                              color:
                                inputValue.length < 8 ? '#ff0000' : '#12b370',
                            }}
                          >
                            8 characters minimum
                          </Typography>
                        </span>
                        <span style={{ display: 'flex', margin: 0 }}>
                          {isUpperCase ? (
                            <CheckCircleIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#12b370' }}
                            />
                          ) : (
                            <CancelIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#ff0000' }}
                            />
                          )}
                          <Typography
                            variant='h6'
                            style={{
                              margin: '0 0 0 5px',
                              fontSize: '0.7rem',
                              color: isUpperCase ? '#12b370' : '#ff0000',
                            }}
                          >
                            uppercase letters
                          </Typography>
                        </span>
                        <span style={{ display: 'flex', margin: 0 }}>
                          {isLowerCase ? (
                            <CheckCircleIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#12b370' }}
                            />
                          ) : (
                            <CancelIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#ff0000' }}
                            />
                          )}
                          <Typography
                            variant='h6'
                            style={{
                              margin: '0 0 0 5px',
                              fontSize: '0.7rem',
                              color: isLowerCase ? '#12b370' : '#ff0000',
                            }}
                          >
                            lowercase letters
                          </Typography>
                        </span>
                        <span style={{ display: 'flex', margin: 0 }}>
                          {isNumber ? (
                            <CheckCircleIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#12b370' }}
                            />
                          ) : (
                            <CancelIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#ff0000' }}
                            />
                          )}
                          <Typography
                            variant='h6'
                            style={{
                              margin: '0 0 0 5px',
                              fontSize: '0.7rem',
                              color: isNumber ? '#12b370' : '#ff0000',
                            }}
                          >
                            numbers
                          </Typography>
                        </span>
                        <span style={{ display: 'flex', margin: 0 }}>
                          {isSymbol ? (
                            <CheckCircleIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#12b370' }}
                            />
                          ) : (
                            <CancelIcon
                              fontSize='small'
                              style={{ fontSize: '1rem', color: '#ff0000' }}
                            />
                          )}
                          <Typography
                            variant='h6'
                            style={{
                              margin: '0 0 0 5px',
                              fontSize: '0.7rem',
                              color: isSymbol ? '#12b370' : '#ff0000',
                            }}
                          >
                            special characters
                          </Typography>
                        </span>
                      </div>
                    </ListItem>
                  ) : null}

                  <ListItem>
                    <Controller
                      name='confirmPassword'
                      control={control}
                      defaultValue=''
                      render={({ field }) => (
                        <TextField
                          variant='outlined'
                          fullWidth
                          id='confirmPassword'
                          label='Confirm Password'
                          error={Boolean(errors.confirmPassword)}
                          helperText={errors.confirmPassword?.message}
                          {...field}
                          InputProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                            startAdornment: (
                              <InputAdornment position='start'>
                                <IconButton>
                                  <EnhancedEncryptionIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position='end'>
                                <IconButton
                                  aria-label='toggle password visibility'
                                  onClick={handleClickShowConfirmPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge='end'
                                >
                                  {showConfirmPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                            type: showConfirmPassword ? 'text' : 'password',
                          }}
                          InputLabelProps={{
                            style: { fontSize: '0.8rem', fontWeight: 300 },
                          }}
                        />
                      )}
                    />
                  </ListItem>

                  <ListItem>
                    <FormControlLabel
                      label=''
                      control={
                        <Checkbox
                          onClick={(e) => setCheckedTerms(e.target.checked)}
                          checked={checkedTerms}
                          name='Terms and Conditions'
                          sx={{
                            '&.Mui-checked': {
                              color: theme.palette.primary.main,
                            },
                          }}
                        />
                      }
                    />

                    <Typography
                      variant='regular'
                      component='p'
                      sx={{
                        fontSize: { xs: '.7rem', md: '.9rem' },
                      }}
                    >
                      I agree to the Whatsup Doc!&#8482;
                      <br />
                      <Typography
                        variant='regular'
                        component='span'
                        sx={{
                          color: theme.palette.primary.main,
                          cursor: 'pointer',
                          '&:hover': {
                            textDecoration: 'underline',
                          },
                        }}
                      >
                        Terms&nbsp;&amp;&nbsp;Conditions
                      </Typography>
                    </Typography>
                  </ListItem>

                  <ListItem
                    style={{ display: 'flex', justifyContent: 'center' }}
                  >
                    {loading ? (
                      <div className={classes.buttonLoading}>
                        <CircularProgress />
                      </div>
                    ) : (
                      <Button
                        fullWidth
                        variant='text'
                        color='primary'
                        type='submit'
                        sx={{ padding: 0 }}
                      >
                        <Typography
                          variant='medium'
                          component='p'
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: { xs: '.8rem', md: '1rem' },
                            color: '#ffffff',
                            backgroundColor: theme.palette.primary.main,
                            border: `1px solid ${theme.palette.primary.main}`,
                            width: '100%',
                            borderRadius: '.5rem',
                            padding: '.5rem 0',
                            transition: '0.5s all ease-out',
                            '&:hover': {
                              backgroundColor: theme.palette.primary.light,
                              color: theme.palette.primary.main,
                              border: `1px solid ${theme.palette.primary.main}`,
                            },
                          }}
                        >
                          <TelegramIcon sx={{ margin: '0 .5rem 0 0' }} />
                          Sign up
                        </Typography>
                      </Button>
                    )}
                  </ListItem>

                  <ListItem
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '0 0 2rem 0',
                    }}
                  >
                    <Typography
                      variant='medium'
                      component='h2'
                      sx={{
                        fontWeight: '200',
                        fontSize: { xs: '.8rem', md: '1rem' },
                      }}
                    >
                      Already have an account?&nbsp;
                    </Typography>
                    <Typography
                      variant='medium'
                      component='h2'
                      sx={{
                        fontWeight: '300',
                        fontSize: { xs: '.8rem', md: '1rem' },
                        color: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                        cursor: 'pointer',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                      onClick={() => {
                        router.push('/login');
                      }}
                    >
                      Login
                    </Typography>
                  </ListItem>
                </List>
              </Slide>
            </Card>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;

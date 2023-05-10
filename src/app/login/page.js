'use client'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import AccountCircle from '@mui/icons-material/AccountCircle'
import PasswordIcon from '@mui/icons-material/Password'

import styles from './login.module.sass'

import LoginBack from '../components/backgrounds/Login'

export default function Login () {
  return (
    <div className={styles.login}>
      <div className={styles.back}>
        <LoginBack className={styles.colors} />
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>Bienvenido</h1>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id='input-with-sx' label='correo electrónico' variant='standard' type='email' />
          </Box>
          <br />
          <br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <PasswordIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id='input-with-sx' label='Password' variant='standard' type='password' />
          </Box>
        </div>
        <div className={styles.right}>
          <img src='./images/login_banner.jpg' alt='login' width='100%' className={styles.banner} />
        </div>
      </div>
    </div>
  )
}

// React Imports
import { useState } from 'react'

import { Card, CardContent, Grid, Typography, Box, TextField, Button, Avatar, Divider } from '@mui/material'

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    username: 'johndoe123',
    email: 'john.doe@example.com',
    phone: '+62812345678',
    fullName: 'John Doe',
    bankAccount: '1234567890',
    bankName: 'Bank Central Asia'
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Update profile:', userData)
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent sx={{ textAlign: 'center' }}>
            <Avatar
              sx={{
                width: 100,
                height: 100,
                margin: '0 auto 1rem',
                fontSize: '2.5rem'
              }}
            >
              {userData.username.charAt(0).toUpperCase()}
            </Avatar>
            <Typography variant='h6'>{userData.fullName}</Typography>
            <Typography color='text.secondary'>{userData.username}</Typography>
            <Button variant='outlined' sx={{ mt: 2 }} startIcon={<i className='ri-camera-line' />}>
              Ubah Foto
            </Button>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={8}>
        <Card>
          <CardContent>
            <Typography variant='h6' gutterBottom>
              Detail Profil
            </Typography>
            <Box component='form' onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Username'
                    value={userData.username}
                    onChange={e => setUserData({ ...userData, username: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Nama Lengkap'
                    value={userData.fullName}
                    onChange={e => setUserData({ ...userData, fullName: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Email'
                    type='email'
                    value={userData.email}
                    onChange={e => setUserData({ ...userData, email: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Nomor Telepon'
                    value={userData.phone}
                    onChange={e => setUserData({ ...userData, phone: e.target.value })}
                  />
                </Grid>
              </Grid>

              <Divider sx={{ my: 4 }} />

              <Typography variant='h6' gutterBottom>
                Informasi Bank
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Nama Bank'
                    value={userData.bankName}
                    onChange={e => setUserData({ ...userData, bankName: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Nomor Rekening'
                    value={userData.bankAccount}
                    onChange={e => setUserData({ ...userData, bankAccount: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type='submit' variant='contained' size='large'>
                    Simpan Perubahan
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ProfilePage

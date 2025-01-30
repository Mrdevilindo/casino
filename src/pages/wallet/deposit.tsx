// React Imports
import { useState } from 'react'

import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material'

const DepositPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Deposit:', { paymentMethod, amount })
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Card>
          <CardContent>
            <Typography variant='h5' gutterBottom>
              Top Up Saldo
            </Typography>
            <Box component='form' onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Metode Pembayaran</InputLabel>
                    <Select
                      value={paymentMethod}
                      label='Metode Pembayaran'
                      onChange={e => setPaymentMethod(e.target.value)}
                    >
                      <MenuItem value='bank_transfer'>Transfer Bank</MenuItem>
                      <MenuItem value='e_wallet'>E-Wallet</MenuItem>
                      <MenuItem value='virtual_account'>Virtual Account</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Jumlah Deposit'
                    type='number'
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <Box component='span' sx={{ mr: 1 }}>
                          Rp
                        </Box>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type='submit' variant='contained' size='large' fullWidth>
                    Lanjutkan Pembayaran
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant='h6' gutterBottom>
              Informasi Deposit
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant='body2' gutterBottom>
                • Minimal deposit: Rp 50.000
              </Typography>
              <Typography variant='body2' gutterBottom>
                • Maksimal deposit: Rp 100.000.000
              </Typography>
              <Typography variant='body2' gutterBottom>
                • Proses deposit instan
              </Typography>
              <Typography variant='body2'>• Customer service 24/7</Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default DepositPage

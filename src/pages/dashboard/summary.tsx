// ** React Imports
import type { ReactNode } from 'react'

// ** Type Imports
import type { ThemeColor } from '@core/theme/colorSchemes';

// ** Component Imports
import CustomAvatar from '@core/components/mui/avatar';

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

// ** Icon Imports
import Icon from '@core/components/icon'


interface SummaryCardProps {
  title: string
  amount: string
  icon: ReactNode
  color: ThemeColor
  subtitle: string
}

const SummaryCard = (props: SummaryCardProps) => {
  const { title, amount, icon, color, subtitle } = props

  return (
    <Card sx={{ boxShadow: 3, height: '100%' }}>
      <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant='h6' sx={{ mb: 1 }}>
              {title}
            </Typography>
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              {subtitle}
            </Typography>
          </Box>
          <CustomAvatar skin='light' color={color} variant='rounded' sx={{ width: 48, height: 48 }}>
            {icon}
          </CustomAvatar>
        </Box>
        <Box sx={{ mt: 'auto' }}>
          <Typography variant='h4'>{amount}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

const DashboardSummary = () => {
  const loading = false // Simulate loading state

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h4' sx={{ mb: 4 }}>
          Ringkasan Saldo
        </Typography>
      </Grid>
      {loading ? (
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Grid>
      ) : (
        <>
          <Grid item xs={12} md={4}>
            <SummaryCard
              title='Saldo Utama'
              amount='Rp 10.000.000'
              icon={<Icon icon='ri-money-dollar-circle-line' />}
              color='primary'
              subtitle='Total saldo tersedia'
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <SummaryCard
              title='Total Deposit'
              amount='Rp 25.000.000'
              icon={<Icon icon='ri-arrow-up-circle-line' />}
              color='success'
              subtitle='Total deposit bulan ini'
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <SummaryCard
              title='Total Withdraw'
              amount='Rp 15.000.000'
              icon={<Icon icon='ri-arrow-down-circle-line' />}
              color='error'
              subtitle='Total withdraw bulan ini'
            />
          </Grid>
        </>
      )}
      <Grid item xs={12}>
        <Card sx={{ mt: 6 }}>
          <CardHeader title='Riwayat Transaksi Terakhir' />
          <CardContent>
            <Typography>Belum ada transaksi</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default DashboardSummary

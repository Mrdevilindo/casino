// React Imports
import { Card, CardContent, Grid, Typography, Box, Button } from '@mui/material'

// Define props interface
interface GameCardProps {
  title: string
  provider: string
  image: string
}

// Game card component
const GameCard = ({ title, provider, image }: GameCardProps) => (
  <Card sx={{ height: '100%' }}>
    <Box sx={{ position: 'relative', paddingTop: '100%' }}>
      <Box
        component='img'
        src={image}
        alt={title}
        sx={{
          position: 'absolute',
          top: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </Box>
    <CardContent>
      <Typography variant='h6' gutterBottom>
        {title}
      </Typography>
      <Typography variant='body2' color='text.secondary' gutterBottom>
        {provider}
      </Typography>
      <Button variant='contained' fullWidth>
        Main Sekarang
      </Button>
    </CardContent>
  </Card>
)

const SlotGames = () => {
  // Sample game data
  const games = [
    {
      title: 'Sweet Bonanza',
      provider: 'Pragmatic Play',
      image: '/images/games/sweet-bonanza.jpg'
    },
    {
      title: 'Gates of Olympus',
      provider: 'Pragmatic Play',
      image: '/images/games/gates-olympus.jpg'
    },
    {
      title: 'Starlight Princess',
      provider: 'Pragmatic Play',
      image: '/images/games/starlight-princess.jpg'
    }

    // Add more games as needed
  ]

  return (
    <Box>
      <Typography variant='h4' gutterBottom>
        Slot Games
      </Typography>
      <Grid container spacing={3}>
        {games.map((game, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <GameCard {...game} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default SlotGames

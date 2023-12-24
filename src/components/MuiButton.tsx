import {Stack, Button, IconButton, ButtonGroup} from '@mui/material'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

export const MuiButton = () => {
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant='text' href='https://google.com'>text</Button>
            <Button variant='contained'>contained</Button>
            <Button variant='outlined'>outline</Button>
        </Stack>
            <Stack spacing={2} direction='row'>
            <Button variant='contained' color='primary'>primary</Button>
            <Button variant='contained' color='secondary'>secondary</Button>
            <Button variant='contained' color='error'>Error</Button>
            <Button variant='contained' color='info'>info</Button>
            <Button variant='contained' color='warning'>warning</Button>
            <Button variant='contained' color='success'>Success</Button>
        </Stack>
        <Stack display='block' spacing={2} direction='row'>
            <Button variant='contained' size='small'>small</Button>
            <Button variant='contained' size='medium'>medium</Button>
            <Button variant='contained' size='large'>large</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
        <Button variant='contained' startIcon={<AccessTimeFilledIcon/>} disableElevation onClick={() => alert('clickes')}>
          Clock
        </Button>
        <Button variant='text' startIcon={<AccessTimeFilledIcon/>} disableRipple>
          Clock
        </Button>
        <Button variant='outlined' startIcon={<AccessTimeFilledIcon/>} >
          Clock
        </Button>
        <IconButton area-aria-label='Clock' color='info' size='small'>
          <AccessTimeFilledIcon />
        </IconButton>
    </Stack>
    <Stack direction='row' spacing={2}>
      <ButtonGroup variant='contained' 
      orientation='vertical' 
      color='secondary' 
      size='small'
      area-aria-label='aligment button group' >
      <Button onClick={() => alert('left button')}>Left </Button>
      <Button >Center</Button>
      <Button >Right</Button>
      </ButtonGroup>
    </Stack>
    </Stack>
  )
}

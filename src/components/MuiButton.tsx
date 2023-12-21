import {Stack, Button} from '@mui/material'

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

    </Stack>
  )
}

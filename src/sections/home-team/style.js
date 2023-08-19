import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme)=>({
    serviceHeading:{
        textAlign: 'center',
        color: theme.palette.text.black,
        position: 'relative',
        display: 'inline-block',

        '&::after': {
            display: 'inline-block',
            width: '40px',
            top: '50%',
            content: '""',
            position: 'absolute',
            background: '#fb8c00',
            height: '4px',
            color: '#fff',
        },
        '&::before': {
            display: 'inline-block',
            width: '40px',
            top: '50%',
            content: '""',
            position: 'absolute',
            background: '#fb8c00',
            height: '4px',
            color: '#fff',
            left: '-42px'
        }       
    }
}));


export default useStyles;
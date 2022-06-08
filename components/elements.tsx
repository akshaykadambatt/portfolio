import {Button as MuiButton} from '@mui/material';
import { styled } from "@mui/system";

const Button = styled(MuiButton)({
    boxShadow:'none',
    backdropFilter: 'blur(6px)',
    transition: "all .3s",
    '.MuiButton-endIcon': {
        transition: "all .2s",
    },
    '&:hover': {
        letterSpacing: "1px",
        backgroundColor: "rgb(var(--one))",
        color: "rgb(var(--foreground))",
        borderColor:"rgb(var(--one))",
    },
    '&:hover .MuiButton-endIcon': {
        marginLeft: "14px",
        transform: "rotate(-11deg)"
    }
})

export { Button }
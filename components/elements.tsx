import {Button as MuiButton} from '@mui/material';
import { styled } from "@mui/system";

const Button = styled(MuiButton)({
    boxShadow:'none',
    backdropFilter: 'blur(6px)'
})

export { Button }
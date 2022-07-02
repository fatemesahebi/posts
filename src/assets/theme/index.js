import { createTheme } from '@mui/material/styles';
import  * as colors  from '@mui/material/colors';

export const palette = { ...colors,...{
        primary: colors.blue
        ,
        secondary:colors.deepOrange
    }

}
export const theme = createTheme({

    direction: 'rtl',
    components: {
        MuiSelect: {
            styleOverrides: {
                root: {
                    " .MuiSelect-icon": {
                        right: "initial",
                        left:"7px"
                    },
                },
                ".MuiSelect-select":{
                    padding:"16px 14px 12px 14px  "
                }
            }
        },
        MuiGrid: {
            styleOverrides: {
                root: {
                    minWidth:"50px"
                },
            },

        }
        ,

        MuiButton: {
            styleOverrides: {
                root: {
                    '@media (max-width:400px)': {
                        fontSize: '10px !important',
                        padding:"8px 10px"
                    },
                    '@media (max-width:330px)': {
                        fontSize: '10px !important',
                        padding:"8px 5px"
                    },


                },
            },
        },

        MuiCssBaseline: {
            styleOverrides:
                {
                    body:{
                        fontWeight:"normal",
                        fontsize:14,
                    }
                }}},
    typography: {
        '@media (max-width:600px)': {
            fontSize: '10px !important',
        },
    },
    palette:palette

});
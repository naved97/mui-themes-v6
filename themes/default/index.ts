// theme.js
import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
    // Color System
    palette: {
        mode: 'light',
        primary: {
            main: '#6200ee',
            dark: '#3700b3',
        },
        secondary: {
            main: '#03dac5',
            dark: '#018786',
        },
        error: {
            main: '#b00020',
            dark: '#8b0000',
        },
        warning: {
            main: '#ff6d00',
            dark: '#e68a00',
        },
        info: {
            main: '#2196f3',
            dark: '#1a73ba',
        },
        success: {
            main: '#2e7d32',
            dark: '#1f5d2a',
        },
    },

    // Typography
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
    },

    // Shape
    shape: {
        borderRadius: 4,
    },

    // Spacing
    spacing: 4,

    // Breakpoints
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },

    // Components
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    padding: '8px 16px',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    width: '100%',
                },
            },
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    fontSize: '0.875rem',
                    padding: '10px 12px',
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontSize: '0.875rem',
                    transform: 'translate(14px, 12px) scale(1)',
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    fontSize: '0.75rem',
                    marginLeft: 4,
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    padding: 4,
                },
            },
        },
        MuiRadio: {
            styleOverrides: {
                root: {
                    padding: 4,
                },
            },
        },
        MuiSwitch: {
            styleOverrides: {
                root: {
                    padding: 4,
                    width: 48,
                },
                switchBase: {
                    padding: 4,
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    fontSize: '0.875rem',
                    padding: '10px 12px',
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontSize: '0.875rem',
                    padding: '8px 16px',
                },
            },
        },
        MuiTable: {
            styleOverrides: {
                root: {
                    borderCollapse: 'separate',
                    borderSpacing: '0 4px',
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    height: 48,
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding: '8px 16px',
                    borderBottom: '1px solid rgba(224, 224, 224, 1)',
                },
                head: {
                    fontSize: '0.875rem',
                    fontWeight: 500,
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    padding: '8px 16px',
                    height: 64,
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    padding: '0 16px',
                    height: 64,
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    width: 240,
                    padding: '16px 24px',
                },
            },
        },
    },
});

export default defaultTheme;
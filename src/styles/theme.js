import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import teal from '@material-ui/core/colors/teal';
import red from '@material-ui/core/colors/red';

const primaryMain = blue[800]; // #1565C0
const secondaryMain = teal[600]; // #00897B

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryMain,
    },
    secondary: {
      main: secondaryMain,
    },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontSize: 14,
    useNextVariants: true,
  },
  overrides: {
    MuiButton: {
      root: {},
    },
    MuiInput: {
      root: {
        width: '100%',
      },
    },
    MuiFormControl: {
      root: {
        width: '100%',
      },
    },
  },
});

export default theme;

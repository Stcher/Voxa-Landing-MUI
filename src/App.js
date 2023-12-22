
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LandingPage from './Components/LandingPage';
import screen from "./img/screen.png"

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'h1'
          },
          style: {
            fontSize: 50,
            fontFamily: 'Lexend',
            fontWeight: 800,
            textAlign: 'left',
            width: "90%",
            paddingBottom: 30
          }
        },
        {
          props: {
            variant: 'subtitle2'
          },
          style: {
            fontSize: 20,
            fontFamily: 'Lexend',
            textAlign: 'left',
            width: "95%",
            paddingBottom: 30
          },
        },
      ]
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          height: "51rem"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: "178px",
          height: "60px"
        }
      }
    }
  }
})

const styles = {
  paperContainer: {
      backgroundImage: `url(${screen})`,
      backgroundRepeat: 'round'
  }
};

function App() {

  return (
    <div className="App" style={styles.paperContainer}>
      <ThemeProvider theme={theme}>
        <LandingPage className="App" />
      </ThemeProvider>
    </div>
  );
}

export default App;

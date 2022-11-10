import React, { useState } from "react";
import "./index.css";
import { Grid } from "./grid";
import { red, green, blue } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Home } from "./home";
import { Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
function App() {
  const DIN200 = new URL(
    "./assets/fonts/5590868/e39ef3e7-91b2-45d0-8c2f-cfdcd0c0ab94.woff2",
    import.meta.url
  ).href;

  const theme1 = createTheme({
    components: {
      // Name of the component
      MuiButton: {
        styleOverrides: {
          // Name of the slot
          root: ({ ownerState }) => ({
            ...(ownerState.variant === "outlined" &&
              ownerState.color === "primary" && {
                borderColor: "#ab2026",
                color: "#ab2026",
                borderRadius: "100vmax",
              }),
          }),
        },
      },
    },
    palette: {
      primary: {
        main: "#111535",
        contrastText: "#fff",
        dark: green[500],
        light: blue[400],
      },
      secondary: {
        main: "#ab2026",
        contrastText: "#ab2026",
        dark: "#ab2026",
        light: "#ab2026",
      },
      error: {
        main: blue[600],
      },
      warning: {
        main: blue[800],
      },
    },
  });

  const theme2 = createTheme({
    // typography: {
    //   fontSize: 38,
    // },
    palette: {
      primary: {
        main: "hsl(78, 100%, 50%, 1)",
        dark: green[500],
        light: blue[400],
      },
      secondary: {
        main: blue[400],
      },
      error: {
        main: blue[600],
      },
      warning: {
        main: blue[800],
      },
    },
  });

  const theme3 = createTheme({
    palette: {
      primary: {
        main: green[200],
      },
      secondary: {
        main: green[400],
      },
      error: {
        main: green[600],
      },
      warning: {
        main: green[800],
      },
    },
  });
  const [customTheme, setCustomTheme] = useState(theme2);
  return (
    <div className="App">
      <ThemeProvider theme={theme1}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grid" element={<Grid />} />
        </Routes>
        {/* <Grid2
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid2 xs={3} sx={{ textAlign: "center" }}>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button onClick={() => setCustomTheme(theme1)}>Theme 1</Button>
              <Button onClick={() => setCustomTheme(theme2)}>Theme 2</Button>
              <Button onClick={() => setCustomTheme(theme3)}>Theme 3</Button>
            </ButtonGroup>
          </Grid2>
        </Grid2> */}
      </ThemeProvider>
    </div>
  );
}

export default App;

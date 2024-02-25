import { theme } from "@/@theme/theme";
import { ThemeProvider } from "@emotion/react";
import React from "react";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";

function App(props) {
  const { Component, pageProps } = props;

  return (
    <AppCacheProvider {...props}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps}></Component>
      </ThemeProvider>
    </AppCacheProvider>
  );
}

export default App;

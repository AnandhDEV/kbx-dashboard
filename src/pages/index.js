import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import HotList from "@/views/hotList";
import NewList from "@/views/newList";
import { Typography } from "@mui/material";

const PanelContainer = styled(Box)(({ theme }) => ({
  padding: "15px 20px 20px 0px",
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "40px",
  fontWeight: "700",
  marginBottom: "10px",
}));

export default function Home() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const component = {
    1: <HotList />,
    2: <NewList />,
  };

  return (
    <>
      <Heading>Catch your next opportunity</Heading>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
        >
          <Tab value={1} label="Hot List" wrapped />
          <Tab value={2} label="New List" />
        </Tabs>

        <PanelContainer>{component[value]}</PanelContainer>
      </Box>
    </>
  );
}

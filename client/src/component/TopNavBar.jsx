import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const TopNav = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#56AD9C",
      }}
    >
      <Box>
        <Typography>
          <IconButton>
            <WhatsAppIcon />
          </IconButton>
          WhatsApp
        </Typography>
      </Box>
      <Box>
        <Typography>Something Special For Everyone</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <img
          src="/images/scales.png"
          alt="scale png"
          style={{ width: "30px", height: "30px" }}
        />
        <Typography>Metal Rates</Typography>
      </Box>
    </Box>
  );
};

export default TopNav;

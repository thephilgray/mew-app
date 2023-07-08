import React from 'react'
import { Box, styled } from "@mui/material";

export const DataGridWrapper = styled(Box)`
    width: 100%;
    max-width: 80vw;
    overflow-x: scroll;
    @media (min-width: 600px) {
      max-width: 88vw;
    }
    @media (min-width: 900px) {
      max-width: 92vw;
    }
    @media (min-width: 1200px) {
      max-width: 100%;
    }
`;

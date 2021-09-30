import React, { useState, useEffect, useRef } from 'react';


import MaterialTable from "material-table";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";


import { ThemeProvider } from '@mui/material/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';

const theme=createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6F44F7',
    },
    secondary: {
      main: '#f50057',
    },
  },
})

export const TableDisplay:React.FC<{campaign:any[], title:string}> = ({campaign,title})=>{
    const columns=[
        {
          title: "CampaignId",
          field: "CampaignId",
        },
        {
          title: "Site",
          field: "Site",
        },
        {
          title: "TotalEngagement",
          field: "TotalEngagement",
        },
        {
          title: "Impressions",
          field: "Impressions",
        }
        ,
        {
          title: "TotalClicks",
          field: "TotalClicks",
        },
        {
          title: "score",
          field: "score",
        }
      ]
    
        if(campaign !== undefined && campaign.length!== 0 ){
            return(
                <MuiThemeProvider theme={theme}>
                    <MaterialTable  title={title} data={campaign} columns={columns} />
                </MuiThemeProvider>)
        }else{
            return(
                    <h2 style={{textAlign:"center"}}>No Campaign selected</h2>
            )
        }
}


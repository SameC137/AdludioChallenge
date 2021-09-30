import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';
import MaterialTable from "material-table";
import {Button,Input,Paper} from "@mui/material";
import { TableDisplay } from './TableDisplay';
// import { ThemeOptions } from '@mui/material/styles';

import { ThemeProvider } from '@mui/material/styles';
import { createTheme, responsiveFontSizes } from "@mui/material/styles";


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


function fetchCampaign(campaignId:string){
  const url='http://localhost:5000/api/campaigns?campaignId='+campaignId
  return axios.get( url ,{
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then(({data})=> {
    // handle success
    return data
  })
  .catch(function (error:any) {
    // handle error
    if(error.response){
      
    console.error(error.response.data);
    throw new Error(error.response.data);
    }else{
      
    console.error(error.message);
    throw new Error(error.message);
    }
  })
}

const ErrorDisplay:React.FC<{error:boolean, errorMessage:string}>=({error,errorMessage})=>{
  if(error){
      return(
        <div>
          <p>{errorMessage}</p>
        </div>
      )
  }
  else{
    return(<></>)
  }
}


const App:React.FC =()=> {
  const [campaignId, setCampaignId]=useState("");
  const [cachedcampaignId, setCachedCampaignId]=useState("");
  // const [fetchError, setFetchError]=useState<boolean>(false);
  // const [errorMessage,setErrorMessage]=useState<string>("");
  const [campaignData,setCampaignData]=useState([]);
  const  campaignRef=useRef<HTMLInputElement>(null);
  
					
  

  const handleFetch= async() => {
    if(campaignId ===""){
      console.log("No campaign selected")
      return
    }
    
    fetchCampaign(campaignId).then((data)=>{
        setCampaignData(data)
        setCachedCampaignId(campaignId)
      }).catch((error)=>{
          
          alert(error.message)
          // setFetchError(true)
          // setErrorMessage(error.message)
      })
}

  const handleCampaignChange= (event:React.ChangeEvent<HTMLInputElement>)=>{
      setCampaignId( campaignRef.current!.value)


  }

  // useEffect(() => {
  //     console.log("here")
  //     console.log(campaignData)
  //   });

  return(
    <ThemeProvider theme={theme}>
      <div className="campaign">
        <Paper  style={{
          padding:20,
          minWidth: "60%",
          color:'white',
        }}
        >
          <div className="form-container">
          <Input placeholder="Campaign Id" inputRef={campaignRef}  onChange={handleCampaignChange}/> 
          <Button color="primary" variant="contained" onClick={handleFetch}>Fetch Campaign</Button>
          </div>
          <TableDisplay title={"Campaign "+cachedcampaignId} campaign={campaignData} />
           {/* <ErrorDisplay error={fetchError} errorMessage={errorMessage} /> */}
        </Paper>
     </div>    
     
    </ThemeProvider>
  );
}

export default App;

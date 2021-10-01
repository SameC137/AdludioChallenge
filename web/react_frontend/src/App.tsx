import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';

import {Button,Paper,Select,MenuItem, SelectChangeEvent, InputLabel } from "@mui/material";
import { TableDisplay } from './TableDisplay';
// import { ThemeOptions } from '@mui/material/styles';

import { ThemeProvider, createTheme } from '@mui/material/styles';




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

function fetchCampaignIds(){
  const url='http://localhost:5000/api/campaigns_list'
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
  const [campaginIdsList,setCampaignIdsList]=useState([]);
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

  useEffect(() => {
    fetchCampaignIds().then((data)=>{
        setCampaignIdsList(data.campaigns)
    }
    ).catch((error)=>{
          
      alert("Error while fetching campaign ids"+error.message)
  })
    
  
  });

  const campaignOptions=()=>{
    var options:any[]=[]
    // setCampaignId(campaginIdsList[1])
    campaginIdsList.forEach(campaign => {
          options.push(<MenuItem value={campaign}>{campaign}</MenuItem>)
      }); 

    return options
  }

  
  const handleCampaignSelect= (event:SelectChangeEvent<string>)=>{
    setCampaignId( event.target.value)

}
  return(
    <ThemeProvider theme={theme}>
      <div className="campaign" style={{ backgroundImage: "url(/background.png)" , backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundBlendMode: "darken"}}>
        <Paper  style={{
          padding:20,
          minWidth: "60%",
          color:'white',
        }}
        >
          <div className="form-container">
          {/* <Input placeholder="Campaign Id" inputRef={campaignRef}  onChange={handleCampaignChange}/>  */}
          <div>
          <InputLabel id="campaign-select-label">Campaign Id</InputLabel>

          <Select  labelId="campaign-select-label" value={campaignId} label="Campaign Id"  onChange={handleCampaignSelect}>
           
          {campaignOptions()}
          </Select>
           </div>
          <Button color="primary" variant="contained" onClick={handleFetch}>Fetch Campaign</Button>
          </div>
          <TableDisplay  title={"Campaign "+cachedcampaignId} campaign={campaignData} />
           {/* <ErrorDisplay error={fetchError} errorMessage={errorMessage} /> */}
        </Paper>
     </div>    
     
    </ThemeProvider>
  );
}

export default App;

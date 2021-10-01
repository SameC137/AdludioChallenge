

import MaterialTable from "@material-table/core";
import { createTheme} from "@mui/material/styles";


import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@mui/styles';

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


const useStyles = makeStyles((theme:any) => ({
  root: {
    color: theme.palette.primary.main,
  }
}));
export const TableDisplay:React.FC<{campaign:any[], title:string}> = ({campaign,title})=>{
  
    const classes = useStyles(theme);
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
                <ThemeProvider theme={theme}><div  className={classes.root}>
                    <MaterialTable title={title} data={campaign} columns={columns} />
                    </div>
                </ThemeProvider>)
        }else{
            return(
                    <h2 style={{textAlign:"center"}}>No Campaign selected</h2>
            )
        }
}


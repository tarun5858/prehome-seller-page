import {Slider,Grid,Typography, Box} from "@mui/material";

const SellerSlider = ({title}) =>{
    return(
        <Box sx={{width:"50%"}}>
                  <Typography sx={{ fontSize:"16px",fontWeight:"bold",textAlign:"left"}}>{title}</Typography>

          <Slider
               
                min={0}
                max={100}
                valueLabelDisplay="on"
                sx={{
                    "& .MuiSlider-track": {
                    backgroundColor: "#7EB5B0",
                    height: 18,
                    border: "none",
                     
                  },
                  "& .MuiSlider-rail": {
                    backgroundColor: "#7EB5B0",
                    height: 18,
                  
                  },
                  "& .MuiSlider-thumb": {
                    backgroundColor: "#7EB5B0",
                    border: "2px solid white",
                    width: 20,
                    height: 20,
                    
                    "&:hover, &:focus, &.Mui-active": {
                      boxShadow: "none",
                    },
                    
                  },
                  "& .MuiSlider-valueLabel": {
                   position:"absolute",
                    backgroundColor: "#7EB5B0",
                    color: "black",
                    fontWeight: "bold",
                    top: 70,
                    width:"90px",
                    height:"41px",
                    borderRadius: "20px",
                    padding: "8px",
                    paddingX: "16px",
                    "&:before": {
                      display: "none",
                    },
                    "& *": {
                      transform: "none",
                    },
                 
                  },
                }}
              />
              <Grid
                container
                justifyContent="space-between"
                
                sx={{ mt: "-8px", mb: "16px", }}
              >
                <Grid item>
                  <Typography>XXX</Typography>
                </Grid>
                <Grid item>
                  <Typography>XXX</Typography>
                </Grid>
              </Grid>
        </Box>
    )
}

export default SellerSlider;
import React from "react";
import { Grid, Paper } from "@mui/material";
import ProfilePage from '../../components/user/profile';
import { Header } from "components/header/header";

export default function profile() {
    return (
        <>
            <Header />
            {/* <Grid container spacing={3}>
                <Grid item xs={12}> */}
                    <Paper
                        sx={{
                            p: 2,
                            display: "flex",
                            flexDirection: "column",
                            minHeight: 500,
                            
                        backgroundColor: '#292929'
                        }}
                    >
                        <ProfilePage/>
                    </Paper>
                {/* </Grid>
            </Grid> */}
        </>
    )
}
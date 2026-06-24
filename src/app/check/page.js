import { Grid, Box } from "@mui/material"
export default function Check() {
    return (


        <div
            style={{
                display: "flex",
                height: "600px",
                background: "#EDECEC",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                gap: "30px"   // 👈 gap between children
            }}
        >

            <div
                style={{
                    width: "200px",
                    height: "60px",
                    border: "solid 4px black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    letterSpacing: "5px",
                    fontWeight: 300
                }}
            >
                ABOUT ME
            </div>


            <div
                style={{
                    width: "60%",
                    lineHeight: "1.8",
                    textAlign: "center"
                }}
            >
                I am a passionate full-stack developer dedicated to building
                scalable web applications and efficient relational database
                systems. With a strong foundation in modern JavaScript frameworks
                and backend engineering, I focus on writing clean, optimized code
                that delivers smooth user experiences and robust functionality.
            </div>


            <div
                style={{
                    borderLeft: "2px solid black",
                    borderRight: "2px solid black",
                    padding: "5px 15px",
                    display: "inline-block"
                }}
            >
                Explore
            </div>
            <div>
                -------------------------
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>


                <Grid container spacing={3}>

                    <Grid size={5}>
                        <Box>
                            <h2>
                                DESIGN
                            </h2>
                            <p>
                                Creating structured, efficient database schemas and intuitive API architectures to ensure smooth data flow across web applications.
                            </p>
                        </Box>
                    </Grid>

                    <Grid size={5}>
                        <Box>
                            <h2>DEVELOPMENT</h2>
                            <p>
                                Building dynamic, responsive user interfaces using React...
                            </p>
                        </Box>
                    </Grid>

                </Grid>
            </div>

        </div>





    )
}
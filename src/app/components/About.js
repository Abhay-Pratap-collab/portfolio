import { Grid, Box } from "@mui/material"
export default function About() {
    return (
        <section id="about">

        <div>




            <div
                style={{
                    display: "flex",
                    height: "800px",
                    background: "#EDECEC",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: '10px',
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
                        textAlign: "center",
                        padding: "10px"
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
                        display: "inline-block",

                    }}
                >
                    Explore
                </div>
                <div>
                    -------------------------
                </div>

                <div style={{ width: '100%', display: 'flex', padding: '20px', marginLeft: '100px' }}>
                    <Box style={{ width: "50%" }}>
                        <h2 style={{ padding: '20px' }}>
                            DESIGN
                        </h2>
                        <div style={{ lineHeight: '25px' }}>

                            <p >
                                Creating structured, efficient database schemas and intuitive API architectures to ensure
                            </p>
                            <p>
                                smooth data flow across web applications.
                            </p>
                        </div>
                    </Box>
                    <Box style={{ width: '50%' }}>
                        <h2 style={{ padding: '20px' }}>
                            DEVELOPMENT
                        </h2>
                        <div style={{ lineHeight: '25px' }}>

                            <p>
                                Building dynamic, responsive user interfaces using React, backed by fast and
                            </p>
                            <p>
                                secure server-side logic using Node.js and Express.
                            </p>
                        </div>
                    </Box>
                </div>
                <div>
                    <Box>
                        <h2 style={{ padding: '20px' }}>
                            DATABASE
                        </h2>
                        <p style={{ lineHeight: '25px' }}>
                            Designing and optimizing complex MySQL relational databases,
                        </p>
                        <p>
                            writing precise queries, and ensuring data integrity across multi-table systems.
                        </p>
                    </Box>
                </div>
                <div>
                    -------------------------
                </div>
            </div>


        </div>





                        </section>
    )
}
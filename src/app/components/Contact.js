import { Box, TextField, Button } from "@mui/material";
import {
    Phone,
    Email,
    GitHub,
    LinkedIn,
    Download,
} from "@mui/icons-material";

export default function Contact() {
    return (
        <section id="contact">

        <div
            style={{
                minHeight: "100vh",
                background: "#EDECEC",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "50px",
            }}
            >
            <Box
                sx={{
                    width: "900px",
                    background: "rgba(255,255,255,0.8)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "25px",
                    p: 5,
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        letterSpacing: "4px",
                    }}
                >
                    CONTACT ME
                </h1>

                <p
                    style={{
                        textAlign: "center",
                        color: "#666",
                    }}
                >
                    Let's work together on your next project.
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "30px",
                        marginTop: "40px",
                    }}
                >
                    {/* Left Side */}
                    <div>
                        <Box
                            sx={{
                                p: 2,
                                mb: 2,
                                borderRadius: "15px",
                                background: "#f8f8f8",
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                transition: "0.3s",
                                "&:hover": {
                                    transform: "translateY(-5px)",
                                },
                            }}
                        >
                            <Phone />
                            <div>
                                <h3>Phone</h3>
                                <p>+91 9198874604</p>
                            </div>
                        </Box>

                        <Box
                            sx={{
                                p: 2,
                                mb: 2,
                                borderRadius: "15px",
                                background: "#f8f8f8",
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                transition: "0.3s",
                                "&:hover": {
                                    transform: "translateY(-5px)",
                                },
                            }}
                        >
                            <Email />
                            <div>
                                <h3>Email</h3>
                                <p>pratapabhay1810@gmail.com</p>
                            </div>
                        </Box>

                        <a
                            href="https://github.com/Abhay-Pratap-collab"
                            target="_blank"
                            rel="noreferrer"
                            >
                            <Box
                                sx={{
                                    p: 2,
                                    mb: 2,
                                    borderRadius: "15px",
                                    background: "#f8f8f8",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                    transition: "0.3s",
                                    "&:hover": {
                                        transform: "translateY(-5px)",
                                    },
                                }}
                                >
                                <GitHub />
                                <div>
                                    <h3>GitHub</h3>
                                    Abhay Pratap Singh

                                </div>

                            </Box>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/abhay-pratap-singh-534bb9360"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Box
                                sx={{
                                    p: 2,
                                    borderRadius: "15px",
                                    background: "#f8f8f8",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                    transition: "0.3s",
                                    "&:hover": {
                                        transform: "translateY(-5px)",
                                    },
                                }}
                                >
                                <LinkedIn />
                                <div>
                                    <h3>LinkedIn</h3>
                                    <p>Abhay Pratap Singh</p>
                                </div>
                            </Box>
                        </a>

                        <Button
                            variant="contained"
                            startIcon={<Download />}
                            sx={{
                                mt: 3,
                                borderRadius: "30px",
                                px: 4,
                            }}
                            >
                            Download Resume
                        </Button>
                    </div>

                    {/* Right Side */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        <TextField
                            label="Your Name"
                            fullWidth
                            />

                        <TextField
                            label="Your Email"
                            fullWidth
                            />

                        <TextField
                            label="Message"
                            multiline
                            rows={6}
                            fullWidth
                            />

                        <Button
                            variant="contained"
                            size="large"
                            >
                            Send Message
                        </Button>
                    </Box>
                </div>
            </Box>
        </div>
                            </section>
    );
}
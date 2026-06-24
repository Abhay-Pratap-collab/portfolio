// "use client"
// import { Box, TextField, Button } from "@mui/material";
// import { useState } from "react";
// import emailjs from "@emailjs/browser";
// import {
//     Phone,
//     Email,
//     GitHub,
//     LinkedIn,
//     Download,
// } from "@mui/icons-material";

// import style from "./Contact.module.css";

// export default function Contact() {

//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         message: "",
//     });
//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };
//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs
//             .send(
//                 "service_i0d1a7i",
//                 "template_fzm8nkl",
//                 {
//                     name: formData.name,
//                     email: formData.email,
//                     message: formData.message,
//                 },
//                 "RHop5M7K5B6NhImxG"
//             )
//             .then(() => {
//                 alert("Message Sent Successfully!");

//                 setFormData({
//                     name: "",
//                     email: "",
//                     message: "",
//                 });
//             })
//             .catch((error) => {
//                 console.error(error);
//                 alert("Failed to send message");
//             });
//     };
//     return (
//         <section id="contact" className={style.contactSection}>
//             <div className={style.contactContainer}>
//                 <div className={style.headingContainer}>
//                     <h1 className={style.contactTitle}>CONTACT ME</h1>

//                     <p className={style.contactSubtitle}>
//                         Let's work together on your next project. Feel free to reach out
//                         for collaborations, freelance work, or opportunities.
//                     </p>
//                 </div>

//                 <div className={style.contactGrid}>
//                     {/* Left Side */}
//                     <div className={style.contactDetails}>
//                         <div className={style.contactInfo}>
//                             <Phone className={style.icon} />

//                             <div>
//                                 <h3>Phone</h3>
//                                 <p>+91 9198874604</p>
//                             </div>
//                         </div>

//                         <div className={style.contactInfo}>
//                             <Email className={style.icon} />

//                             <div>
//                                 <h3>Email</h3>
//                                 <p>pratapabhay1810@gmail.com</p>
//                             </div>
//                         </div>

//                         <a
//                             href="https://github.com/Abhay-Pratap-collab"
//                             target="_blank"
//                             rel="noreferrer"
//                             className={style.contactLink}
//                         >
//                             <div className={style.contactInfo}>
//                                 <GitHub className={style.icon} />

//                                 <div>
//                                     <h3>GitHub</h3>
//                                     <p>Abhay Pratap Singh</p>
//                                 </div>
//                             </div>
//                         </a>

//                         <a
//                             href="https://www.linkedin.com/in/abhay-pratap-singh-534bb9360"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className={style.contactLink}
//                         >
//                             <div className={style.contactInfo}>
//                                 <LinkedIn className={style.icon} />

//                                 <div>
//                                     <h3>LinkedIn</h3>
//                                     <p>Abhay Pratap Singh</p>
//                                 </div>
//                             </div>
//                         </a>

//                         <Button
//                             variant="contained"
//                             startIcon={<Download />}
//                             href="/abhay.pdf"
//                             className={style.resumeButton}
//                         >
//                             Download Resume
//                         </Button>
//                     </div>

//                     {/* Right Side */}
//                     <form onSubmit={sendEmail}>

//                         <Box className={style.contactForm}>
//                             <TextField
//                                 label="Your Name"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 fullWidth
//                             />
//                             <TextField
//                                 label="Your Email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 fullWidth
//                             />



//                             <TextField
//                                 label="Message"
//                                 name="message"
//                                 value={formData.message}
//                                 onChange={handleChange}
//                                 multiline
//                                 rows={6}
//                                 fullWidth
//                             />


//                             <Button
//                                 variant="contained"
//                                 size="large"
//                                 type="submit"
//                                 className={style.sendButton}
//                             >
//                                 Send Message
//                             </Button>
//                         </Box>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     )
// }
"use client"
import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
    Phone,
    Email,
    GitHub,
    LinkedIn,
    Download,
} from "@mui/icons-material";

import style from "./Contact.module.css";

export default function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_l0d1a7i",
                "template_fzm8nkl",
                {
                    name: formData.name,       // Matches your {{name}} template field
                    email: formData.email,     // Matches your {{email}} template field
                    message: formData.message, // Matches your {{message}} template field
                },
                "RHop5M7K5B6NhImxG"
            )
            .then(() => {
                alert("Message Sent Successfully!");

                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            })
            .catch((error) => {
                console.error("EmailJS Error details:", error);
                alert("Failed to send message");
            });
    };

    return (
        <section id="contact" className={style.contactSection}>
            <div className={style.contactContainer}>
                <div className={style.headingContainer}>
                    <h1 className={style.contactTitle}>CONTACT ME</h1>

                    <p className={style.contactSubtitle}>
                        Let's work together on your next project. Feel free to reach out
                        for collaborations, freelance work, or opportunities.
                    </p>
                </div>

                <div className={style.contactGrid}>
                    {/* Left Side */}
                    <div className={style.contactDetails}>
                        <div className={style.contactInfo}>
                            <Phone className={style.icon} />

                            <div>
                                <h3>Phone</h3>
                                <p>+91 9198874604</p>
                            </div>
                        </div>

                        <div className={style.contactInfo}>
                            <Email className={style.icon} />

                            <div>
                                <h3>Email</h3>
                                <p>pratapabhay1810@gmail.com</p>
                            </div>
                        </div>

                        <a
                            href="https://github.com/Abhay-Pratap-collab"
                            target="_blank"
                            rel="noreferrer"
                            className={style.contactLink}
                        >
                            <div className={style.contactInfo}>
                                <GitHub className={style.icon} />

                                <div>
                                    <h3>GitHub</h3>
                                    <p>Abhay Pratap Singh</p>
                                </div>
                            </div>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/abhay-pratap-singh-534bb9360"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={style.contactLink}
                        >
                            <div className={style.contactInfo}>
                                <LinkedIn className={style.icon} />

                                <div>
                                    <h3>LinkedIn</h3>
                                    <p>Abhay Pratap Singh</p>
                                </div>
                            </div>
                        </a>

                        <Button
                            variant="contained"
                            startIcon={<Download />}
                            href="/abhay.pdf"
                            className={style.resumeButton}
                        >
                            Download Resume
                        </Button>
                    </div>

                    {/* Right Side */}
                    <form onSubmit={sendEmail}>

                        <Box className={style.contactForm}>
                            <TextField
                                label="Your Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                fullWidth
                            />
                            <TextField
                                label="Your Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                fullWidth
                            />

                            <TextField
                                label="Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                multiline
                                rows={6}
                                fullWidth
                            />

                            <Button
                                variant="contained"
                                size="large"
                                type="submit"
                                className={style.sendButton}
                            >
                                Send Message
                            </Button>
                        </Box>
                    </form>
                </div>
            </div>
        </section>
    );
}
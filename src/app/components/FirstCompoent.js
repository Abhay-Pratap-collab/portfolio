// import Style from "./FirstComponent.module.css"
// import { Grid } from "@mui/material"
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

// export default function FirstCompoent() {
//     return (
//         <div style={{
//             display: 'flex',
//             height: '500px',
//             position: 'relative',
//             background: '#eaece7' /* Parent takes the light color */
//         }}>


//             {/* Left Content */}
//             <div style={{ width: '50%', padding: '20px', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                 <div style={{ lineHeight: '35px' }}>
//                     <p style={{
//                         fontFamily: '"Patua One", serif',
//                         fontOpticalSizing: 'auto',
//                         fontWeight: 400, // ya 500, 700, etc.
//                         fontStyle: 'normal',
//                     }}>
//                         Hi,I am
//                     </p>
//                     <p style={{
//                         fontFamily: '"Patua One", serif',
//                         fontOpticalSizing: 'auto',
//                         fontWeight: 400, // ya 500, 700, etc.
//                         fontStyle: 'normal',
//                         fontSize: '25px'
//                     }}>
//                         Abhay Pratap Singh
//                     </p>
//                     <p style={{

//                         fontOpticalSizing: 'auto',
//                         fontWeight: 50, // ya 500, 700, etc.
//                         fontStyle: 'normal',

//                     }}>
//                         Web Developer
//                     </p>

//                     <div style={{
//                         display: 'flex',
//                         gap: '20px',
//                         marginTop: '20px',
//                     }}>
//                         <a
//                             href="https://github.com/Abhay-Pratap-collab"
//                             target="_blank"
//                             rel="noreferrer"
//                         >
//                             <GitHubIcon />

//                         </a>
//                         <a
//                             href="https://www.linkedin.com/in/abhay-pratap-singh-534bb9360"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <LinkedInIcon />
//                         </a>

//                     </div>

//                 </div>


//             </div>

//             {/* Right Slanted Container */}
//             <div style={{
//                 position: 'absolute',
//                 right: 0,
//                 top: 0,
//                 width: '60%', /* Make it wider than 50% so it slants into the left side */
//                 height: '100%',
//                 background: '#000000',
//                 color: 'white',
//                 clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)', /* Cuts the diagonal line */
//                 display: 'flex',
//                 alignItems: 'flex-start',
//                 padding: '20px',
//                 paddingLeft: '15%' /* Push content to the right of the slanted cut */
//             }}>
//                 <div style={{alignItems:'center',display:'flex',justifyContent:'center'}}>
//                     <img style={{width:'380px',marginLeft:'35px'}} src="abhay.png"></img>
//                 </div>

//             </div>


//         </div>
//     )
// }


import Style from "./FirstComponent.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function FirstCompoent() {
    return (
        <div className={Style.container}>
            {/* Left Content */}
            <div className={Style.leftSection}>
                <div className={Style.content}>
                    <p className={Style.greeting}>Hi, I am</p>

                    <p className={Style.name}>
                        Abhay Pratap Singh
                    </p>

                    <p className={Style.role}>Web Developer</p>

                    <div className={Style.socialIcons}>
                        <a
                            href="https://github.com/Abhay-Pratap-collab"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <GitHubIcon />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/abhay-pratap-singh-534bb9360"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedInIcon />
                        </a>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className={Style.rightSection}>
                <div className={Style.imageContainer}>
                    <img
                        className={Style.profileImage}
                        src="abhay.png"
                        alt="Abhay Pratap Singh"
                    />
                </div>
            </div>
        </div>
    );
}
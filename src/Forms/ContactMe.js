import React, { useRef }from "react";
import { TextField } from "@mui/material";
import {sizeWidth, ThemeProvider, width} from "@mui/system";
import {createTheme} from "@mui/material/styles";
import emailjs from '@emailjs/browser';
import { setConstantValue } from "typescript";

export const theme = createTheme({
    palette: {
      primary: {
        main: '#ffffff',
      },
    },
  });


const ContactMe = () => {
    const[cResult, setResult] = React.useState("Write any message, let's talk!")
    const[value, setValue] = React.useState(undefined)
    // const[cMail, setMail] = React.useState("")
    // const[cSubject, setSubject] = React.useState("")
    // const[cMessage, setMessage] = React.useState("")

    // const handleName = (e:Page) => {
    //     setName(e.target.value);
    // }
    // const handleMail = (e:Page) => {
    //     setMail(e.target.value);
    // }
    // const handleSubject = (e:Page) => {
    //     setSubject(e.target.value);
    // }
    // const handleMessage = (e:Page) => {
    //     setMessage(e.target.value);
    // }

    const form = useRef();
    const sendEmail = (e) => {
      
    e.preventDefault();
    setValue("");
      emailjs.sendForm('service_gzxqrjl', 'template_y0akbvo', form.current, 'O78ftNtorqDslFKGY')
        .then((result) => {
            console.log(result.text);
            setResult("The message was sent. Thank you!")
        }, (error) => {
            console.log(error.text);
            setResult("The message was not sent. Please try again.")
        });
    };

    return(
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <form ref={form} onSubmit={sendEmail}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{margin: '20px'}}>
                    <TextField value={value} name="user_name" variant="standard" label={'Name'} 
                    color="primary" InputProps={{ inputProps: { style: { color: '#ffffff', width: '20vw'}}}} focused/>
                    </div>
                    <div style={{margin: '20px'}}>
                    <TextField value={value} name="user_email" variant="standard" label={'E-mail'} 
                    color="primary" InputProps={{ inputProps: { style: { color: '#ffffff', width: '20vw'}}}} focused/>
                    </div>
                </div>
                    <div style={{margin: '30px'}}>
                        <TextField
                        value={value}
                        name="message"
                        id="outlined-textarea"
                        placeholder={cResult}
                        multiline
                        InputProps={{ inputProps: { style: { color: '#ffffff', width: '80vw', height: '250px'}}}} focused
                        />
                    </div>
                    <button className="button2" type="submit" value="Send">SEND MESSAGE</button>
                    </form>
                </ThemeProvider>
        </React.Fragment>
    )
}

export default ContactMe
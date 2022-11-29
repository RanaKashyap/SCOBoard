import "./calendar.scss"
import React from 'react'

import {useNavigate} from "react-router-dom";
import "../../images/pegasus.png"
import Nav from "../../components/adminNav/Nav.jsx"




const Calendar = () => {
    const navigate = useNavigate() //used for button redirects
    return (
        <div className="calendar">
            < Nav />
            <div className = "pegasus-pic">
           
            
            </div>
            <div className = "fixed">
            <iframe title = "caly" src="https://calendar.google.com/calendar/embed?height=800&wkst=1&bgcolor=%23F6BF26&ctz=America%2FNew_York&showTitle=0&src=YXltZW5oMDYyN0BnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=OHF0ZzI1M2J0Yms3bW1yZWdwdG52M2VlZWVzdWlrbmtAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%23F6BF26&color=%230B8043" width="1300" height="900" frameborder="0" scrolling="no"></iframe>
            <button onClick = {() => navigate('/admin')} >Back to Home</button>
            </div>
        </div>
    )
}

export default Calendar
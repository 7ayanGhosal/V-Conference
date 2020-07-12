import React, { Component } from 'react';
import WebApp from '../WebApps/WebApp/WebApp';
import zoom from '../../Assets/Zoom.png';
import jioMeet from '../../Assets/JioMeet.jpg';
import Webex from '../../Assets/Webex.webp';
import GoogleMeet from '../../Assets/GoogleMeet.png';
import Skype from '../../Assets/Skype.png';
import Gotomeeting from '../../Assets/GoTOMeeting.png';
import TeamLink from '../../Assets/TeamLink.png';
import GoToWebinar from '../../Assets/GoToWebinar.png';
import Namaste from '../../Assets/SayNamaste.webp';
import Zoho from '../../Assets/Zoho.png';
import CX3 from '../../Assets/CX3.png';
import Henlo from '../../Assets/Henlo.jpg';

import './WebApps.css';
class Layout extends Component {
  render() {
    return (
      <div class="container-fluid">
          <div class="row">
            <WebApp src={zoom} name="Zoom" site="https://zoom.us/" host="https://zoom.us/signin" join="https://zoom.us/join"/>
            <WebApp src={jioMeet} name="Jio Meet" site="https://jiomeetpro.jio.com/" host="https://jiomeetpro.jio.com/login" join="https://jiomeetpro.jio.com/join-meeting"/>
            <WebApp src={Webex} name="Webex" site="https://www.webex.com/" host="https://www.webex.com/" join="https://www.webex.com/"/>
            <WebApp src={GoogleMeet} name="Google Meet" site="https://meet.google.com/" host="https://meet.google.com/" join="https://meet.google.com/"/>
            <WebApp src={Skype} name="Skype" site="https://www.skype.com/en/" host="https://www.skype.com/en/free-conference-call/" join="https://login.live.com/"/>
            <WebApp src={Gotomeeting} name="Go To Meeting" site="https://www.gotomeeting.com/" host="https://www.gotomeeting.com/" join="https://www.gotomeeting.com/"/>
            <WebApp src={GoToWebinar} name="Go To Webinar" site="https://www.gotomeeting.com/en-in/webinar" host="https://www.gotomeeting.com/en-in/webinar" join="https://www.gotomeeting.com/en-in/webinar"/>
            <WebApp src={TeamLink} name="TeamLink" site="https://www.teamlink.co/" host="https://www.teamlink.co/" join="https://www.teamlink.co/"/>
            <WebApp src={Namaste} name="NAMASTE" site="https://www.saynamaste.in/" host="https://www.saynamaste.in/" join="https://www.saynamaste.in/"/>
            <WebApp src={Zoho} name="Zoho Meeting" site="https://www.zoho.com/meeting/" host="https://www.zoho.com/meeting/" join="https://www.zoho.com/meeting/"/>
            <WebApp src={CX3} name="3CX WebMeet" site="https://www.3cx.com/webmeeting/" host="https://www.3cx.com/webmeeting/" join="https://www.3cx.com/webmeeting/"/>
            <WebApp src={Henlo} name="Henlo" site="https://henlo.in/" host="https://henlo.in/" join="https://henlo.in/"/>
        </div>
      </div>
    );
  }
}

export default Layout;
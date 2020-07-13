import React from 'react';

const Search = (props)=>{
    return(
        <div class="container-fluid">
            <form method="post" action="https://v-conference-server.herokuapp.com/join-meeting">
                <div class="form-row align-items-center m-auto">
                    <div class="m-auto col-8 col-sm-6 col-md-4">
                    <label class="sr-only" for="inlineFormInput">Name</label>
                    <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Meeting ID" name="meetingId" required/>
                    </div>
                    <div class="m-auto col-8 col-sm-6 col-md-4">
                    <label class="sr-only" for="inlineFormInputGroup">Username</label>
                    <div class="input-group mb-2">
                        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username" name="userName" required/>
                    </div>
                    </div>
                    <div class="m-auto col-8 col-sm-8 col-md-3">
                        <select class="form-control form-control-sm mb-2" name="app" required>
                            <option value="1">Zoom</option>
                            <option value="2">Jio Meet</option>
                            <option value="3">Webex</option>
                            <option value="4">Google Meet</option>
                            <option value="5">Skype</option>
                            <option value="6">GotToMeeting</option>
                            <option value="7">GoTOWebinar</option>
                            <option value="8">TeamLink</option>
                            <option value="9">Namaste</option>
                            <option value="10">Zoho Meeting</option>
                            <option value="11">3CX WebMeeting</option>
                            <option value="12">Henlo</option>
                        </select>
                    </div>
                    <div class="m-auto col-8 col-sm-4 col-md-1"> 
                        <button type="submit" class="btn btn-sm btn-outline-primary mb-2 w-100">Join</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Search;
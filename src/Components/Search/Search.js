import React from 'react';

const Search = (props)=>{
    return(
        <div class="container-fluid">
            <form>
                <div class="form-row align-items-center m-auto">
                    <div class="m-auto col-8 col-sm-6 col-md-4">
                    <label class="sr-only" for="inlineFormInput">Name</label>
                    <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Meeting ID" />
                    </div>
                    <div class="m-auto col-8 col-sm-6 col-md-4">
                    <label class="sr-only" for="inlineFormInputGroup">Username</label>
                    <div class="input-group mb-2">
                        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username" />
                    </div>
                    </div>
                    <div class="m-auto col-8 col-sm-8 col-md-3">
                        <select class="form-control form-control-sm mb-2">
                            <option>Select App</option>
                            <option>Zoom</option>
                            <option>Jio Meet</option>
                            <option>Webex</option>
                            <option>Google Meet</option>
                            <option>Skype</option>
                            <option>GotToMeeting</option>
                            <option>GoTOWebinar</option>
                            <option>TeamLink</option>
                            <option>Namaste</option>
                            <option>Zoho Meeting</option>
                            <option>3CX WebMeeting</option>
                            <option>Henlo</option>
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
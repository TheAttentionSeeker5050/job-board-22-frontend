export function TokenDeniedEvent() {
    // this event will be triggered when access is being denied
    // and the token refresh api call does not work
    // this is a quick and easy fix to fix the main view so
    // we can show when an user is not logged in I will make 
    // a more sophisticated view in the future. Also I want the
    // challenge of not using axios

    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    localStorage.removeItem("response_status")

}
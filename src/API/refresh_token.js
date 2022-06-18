export function RefreshTokenAPICall (){
    // we use this funciton to make an api call to the backend for 
    // requesting the authentication token 

    let token = {
        refresh: localStorage.getItem("refresh_token")
    }



    fetch("http://127.0.0.1:8000/token/refresh/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(token)
    })
        .then(response => response.json())
        .then(data => {
            if (data.access) {
                localStorage.setItem("access_token", data.access)
                
            } else {
                this.setState({alert_message:data.detail})
            }
        })
        .catch(error => {
            console.error("Error: \n", error)
        })
}


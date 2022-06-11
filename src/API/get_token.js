export function APICall2 (email, password){
    // we use this funciton to make an api call to the backend for 
    // requesting the authentication token 

    let user = {
        email: email,
        password: password
    }



    fetch("http://127.0.0.1:8000/token/obtain/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .then(data => {
            if (data.access && data.refresh) {
                localStorage.setItem("access_token", data.access)
                localStorage.setItem("refresh_token", data.refresh)
                localStorage.setItem("user_email", data.email)
                localStorage.setItem("user_id", data.user_id)
                window.location.replace("/")

            } else {
                this.setState({alert_message:data.detail})
            }
        })
        .catch(error => {
            console.error("Error: \n", error)
        })
}


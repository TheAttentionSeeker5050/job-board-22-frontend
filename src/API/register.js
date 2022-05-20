export function RegisterAPICall (username, email, password, password2, first_name, last_name){
    // we use this funciton to make an api call to the backend for 
    // requesting the authentication token 

    // let navigate = useNavigate();

    let registration_form = {
        username: username,
        email: email,
        password: password,
        password2: password2,
        first_name: first_name,
        last_name: last_name
        
    }


    fetch("http://127.0.0.1:8000/register/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin":"http://127.0.0.1:3000"
        },
        body: JSON.stringify(registration_form),
    })
        .then(response => response.json())
        .then(data => {
            window.location.replace("/")
        })
        .catch(error => {
            console.error("Error: \n", error)
        })
    
    
    
}
export async function getWorkExperienceByUser(user_id, is_profile_owner=true){
    // get the work experience of a specific candidate
    if (is_profile_owner === true) {
        var id = localStorage.getItem("user_id")
    } else {
        var id = user_id
    }

    await fetch(`http://127.0.0.1:8000/job-experience-list/${id}/`,{
        method:"GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
            "Accept": "application/json",

        }
    })
        .then(response => response.json())
        .then(data => {
            this.setState()
        })

    
}
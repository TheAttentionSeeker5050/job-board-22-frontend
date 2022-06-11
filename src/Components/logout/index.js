import {TokenDeniedEvent} from "../../API/token_denied"

export function LogoutRedirectView() {

    TokenDeniedEvent()

    var redirect_var = window.location.replace("localhost:3000/")

    return(
        <div>
            {redirect_var}
        </div>
    )
}
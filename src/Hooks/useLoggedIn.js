import { useState } from "react"

const useLoggedIn =()=>{
    const [loggedIn, setLoggedIn] = useState(false)
        



    return loggedIn
}

export default useLoggedIn;
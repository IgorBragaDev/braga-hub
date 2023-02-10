import { api } from "../../service"

export function Dash(){

    const userToken = localStorage.getItem("authToken")
    console.log(userToken)

    const userLogado = (async()=>{
        try {
            await api.get("/profile",{
                headers : {
                    "Content-Type": "application/json",
                    "Authorization" : `Bearer ${userToken}`}
            }).then((res)=>{
                console.log(res.data)
            })
        } catch (error) {
            
        }

    })

    {userLogado()}
    return

}
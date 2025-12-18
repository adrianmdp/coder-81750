import { useEffect } from "react"
import { services } from "../../services"

const Vehicles = () => {

    useEffect(() => {
        services.firebase.obtenerVehiculos().then((resp) => {
            console.log(resp)
        })
    }, [])

}

export default Vehicles
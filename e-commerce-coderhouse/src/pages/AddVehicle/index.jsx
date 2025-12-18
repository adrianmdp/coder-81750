import { useEffect } from "react"
import { crearVehiculo } from "../../services/firebase/vehicles"


const AddVehicle = () => {

    useEffect(() => {
        crearVehiculo().then((resp) => {
            console.log(resp)
        })
    }, [])

}

export default AddVehicle
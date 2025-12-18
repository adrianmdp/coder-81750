import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from "../../utils/firebase"

/**
 * 
 */
export const obtenerVehiculos = async () => {
    const querySnapshot = await getDocs(collection(db, 'vehicles'))
    const vehicles = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    return vehicles
}

/**
 * 
 */
const obtenerVehiculo = async (id) => {}

/**
 * 
 */
export const crearVehiculo = async (vehiculo) => {
    const docRef = await addDoc(collection(db, "vehicles"), vehiculo);
    return docRef.id
}

/**
 * 
 */
const actualizarVehiculo = async (id, vehiculo) => {}

/**
 * 
 */
const eliminarVehiculo = async (id) => {}
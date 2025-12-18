const { useEffect } = require("react")

const useProducts = () => {

    const [useProducts, setUseProducts] = useState([])

    useEffect(() => {}, [])

    const fetchProducts = async (limit, offset) => {

        services.products.getAll({ limit, offset })
            .then(response => {
                setUseProducts(response.data)
            })
            .catch(error => {
                console.error("Error fetching products:", error)
            })

    }

    const fetchProduct = async (id) => {}

    return { fetchProducts }

}
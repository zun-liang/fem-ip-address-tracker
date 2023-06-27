import { useMap } from "react-leaflet/hooks"
import { useEffect } from "react"

const UpdatedMap = ({lat, lng, click}) => {
    const map = useMap()
    useEffect(() => {
        map.flyTo([lat, lng], map.getZoom())
    }, [lat])
    return null
}

export default UpdatedMap
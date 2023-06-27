import UpdatedMap from "./UpdatedMap"
import styled from "styled-components"
import LocationIcon from "./assets/images/icon-location.svg"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 65vh;
`
const Map = ({lat, lng, click}) => {
    const myIcon = L.icon({
        iconUrl: `${LocationIcon}`,
        iconAnchor: [20, 0],
        popupAnchor: [2, 0]
    })
    const MarkerLat = click > 0 ? lat : 34.0536
    const MarkerLng = click > 0 ? lng : -118.084
    return(
        <StyledMapContainer id="map" center={[34.0536, -118.084]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[MarkerLat, MarkerLng]} icon={myIcon} >
                <Popup>Your IP address location.</Popup>
            </Marker>
            {click > 0 &&<UpdatedMap lat={lat} lng={lng} click={click}/>}
        </StyledMapContainer>
    )
}

export default Map
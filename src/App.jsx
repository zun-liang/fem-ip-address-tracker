import { useState, useEffect } from "react"
import Loading from "./Loading"
import Error from "./Error"
import Content from "./Content"
import Map from "./Map"
import GlobalStyles from "./globalStyles"

const App = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [ipInput, setIpInput] = useState("")
  const handleChange = (e) => setIpInput(e.target.value)
  const [click, setClick] = useState(0)
  const [messageDisplay, setMessageDisplay] = useState(false)
  const ipAddressRegex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  const [results, setResults] = useState({
    ip: "",
    location: "",
    latitude: "",
    longitude: "",
    timezone: "",
    isp: ""
  })

  useEffect(() => {
    let fetchWorking = true
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_ioF6cyCWmdHs6wXnmtTD2bojZOppi&ipAddress=${ipInput}`)
        .then(res => {
            if (!res.ok) {
              throw Error("There is an error!")
            } 
              return res.json()
            }
        )
        .then(data => {
          if (fetchWorking) {
            setResults({
              ip: data.ip,
              location: data.location.city + ", " + data.location.region 
                        + ", " + data.location.country 
                        + `${data.location.postalCode === "" ? "" : ", "  + data.location.postalCode }`,
              latitude: data.location.lat,
              longitude: data.location.lng,
              timezone: "UTC " + data.location.timezone,
              isp: data.isp
        })}})
        .catch(error => setError(error))
        .finally(() => setLoading(false))

        return () => {
          fetchWorking = false
        }
    }, [click])

  const handleClick = () => {
    if(!ipAddressRegex.test(ipInput)) {
      setMessageDisplay(true)
    } else {
      setMessageDisplay(false)
      setClick(prev => prev + 1)
    }
  }
  
  if (loading) return <Loading />
  if (error) return <Error />

  return(
    <main>
      <GlobalStyles />
      <div>
        <Content
          ipInput={ipInput}
          handleChange={handleChange}
          handleClick={handleClick}
          messageDisplay={messageDisplay} 
          ip={results.ip} 
          location={results.location} 
          timezone={results.timezone} 
          isp={results.isp}
        />
        <Map 
          lat={results.latitude} 
          lng={results.longitude} 
          click={click}
        />
      </div>
    </main>
  )
}

export default App

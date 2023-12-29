import canadaMap from '../assets/locations/desktop/image-map-canada.png'
import australiaMap from '../assets/locations/desktop/image-map-australia.png'
import UKMap from '../assets/locations/desktop/image-map-united-kingdom.png'
import LocationInfoCard from '../components/LocationInfoCard'
import LocationMap from '../components/LocationMap'
import CallToAction from '../components/CallToAction'

function Locations() {
  return (
    <>
      <section className='grid grid-cols-3 grid-rows-3 gap-8'>
        <LocationInfoCard
          country='Canada'
          office='Central'
          address1='3886 Wellington Street'
          address2='Toronto, Ontario M9C 3J5'
          phone='+1 253-863-8967'
          email='contact@designo.co'
        />
        <LocationMap country='Canada' map={canadaMap} />
        <LocationMap country='Australia' map={australiaMap} />
        <LocationInfoCard
          country='Australia'
          office='AU'
          address1='19 Balonne Street'
          address2='New South Wales 2443'
          phone='(02) 6720 9092'
          email='contact@designo.au'
        />
        <LocationInfoCard
          country='United Kingdom'
          office='UK'
          address1='13  Colorado Way'
          address2='Rhyd-y-fro SA8 9GA'
          phone='078 3115 1400'
          email='contact@designo.uk'
        />
        <LocationMap country='United Kingdom' map={UKMap} />
      </section>

      <CallToAction />
    </>
  )
}

export default Locations

import CallToAction from '../components/CallToAction'
import LocationInfoCard from '../components/LocationInfoCard'
import LocationMap from '../components/LocationMap'

function Locations() {
  return (
    <>
      <section className='flex flex-col gap-12 md:gap-[120px] lg:gap-8 max-md:-mx-6'>
        <div className='flex max-lg:flex-col md:gap-8 overflow-hidden'>
          <LocationInfoCard
            country='Canada'
            office='Central'
            address1='3886 Wellington Street'
            address2='Toronto, Ontario M9C 3J5'
            phone='+1 253-863-8967'
            email='contact@designo.co'
          />
          <LocationMap map='bg-[url("./assets/locations/desktop/image-map-canada.png")] md:bg-[url("./assets/locations/tablet/image-map-canada.png")] bg-[url("./assets/locations/desktop/image-map-canada.png")]' />
        </div>
        <div className='flex max-lg:flex-col md:gap-8 overflow-hidden'>
          <LocationInfoCard
            country='Australia'
            office='AU'
            address1='19 Balonne Street'
            address2='New South Wales 2443'
            phone='(02) 6720 9092'
            email='contact@designo.au'
            className='lg:order-2'
          />
          <LocationMap map='bg-[url("./assets/locations/desktop/image-map-australia.png")] md:bg-[url("./assets/locations/tablet/image-map-australia.png")] bg-[url("./assets/locations/desktop/image-map-australia.png")]' />
        </div>
        <div className='flex max-lg:flex-col md:gap-8 overflow-hidden'>
          <LocationInfoCard
            country='United Kingdom'
            office='UK'
            address1='13  Colorado Way'
            address2='Rhyd-y-fro SA8 9GA'
            phone='078 3115 1400'
            email='contact@designo.uk'
          />
          <LocationMap map='bg-[url("./assets/locations/desktop/image-map-uk.png")] md:bg-[url("./assets/locations/tablet/image-map-uk.png")] bg-[url("./assets/locations/desktop/image-map-uk.png")]' />
        </div>
      </section>

      <CallToAction />
    </>
  )
}

export default Locations

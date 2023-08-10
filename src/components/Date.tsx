export default function Date() {

  const cars = ['Model 3', 'Model Y', 'Model S', 'Model X']
  const locations = ['Gainesville', 'Jacksonville', 'Miami', 'Orlando']

  const car = cars.map(car => <option value={car}>{car}</option>)
  const location = locations.map(location => <option value={location}>{location}</option>)
  return(
    <div className="mx-auto rounded-lg shadow-xl py-16 px-10">
      <h1 className="font-bold text-2xl">Book your Tesla</h1>
      <div>
        <form>
          <label className="font-bold text-lg" htmlFor="car">Select your Car Type <span className="text-red-600">*</span></label>
          <select name="car" id="car">
            {car}
          </select>
        </form>
      </div>
    </div>
  )
}
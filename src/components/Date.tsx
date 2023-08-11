import DatePick from "./DatePick"

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
            <option selected disabled hidden>Select your car</option>
            {car}
          </select>

          <label className="font-bold text-lg" htmlFor="pick">Pick-Up <span className="text-red-600">*</span></label>
          <select name="pick" id="pick">
            <option selected disabled hidden>Select your pick-up location</option>
            {location}
          </select>

          <label className="font-bold text-lg" htmlFor="drop">Drop Off <span className="text-red-600">*</span></label>
          <select name="drop" id="drop">
            <option selected disabled hidden>Select your drop off location</option>
            {location}
          </select>

          <label className="font-bold text-lg" htmlFor="pickDate">Pick-Up <span className="text-red-600">*</span></label>
          <div className="border" id="pickDate"><DatePick /></div>

          <label className="font-bold text-lg" htmlFor="dropDate">Drop Off <span className="text-red-600">*</span></label>
          <div className="border" id="dropDate"><DatePick /></div>
          <button>Reserve</button>
        </form>
      </div>
    </div>
  )
}
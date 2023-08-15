import DatePick from "./DatePick"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faLocationDot, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

export default function Date() {

  const cars = ['Model 3', 'Model Y', 'Model S', 'Model X']
  const locations = ['Gainesville', 'Jacksonville', 'Miami', 'Orlando']


  const car = cars.map(car => <option value={car}>{car}</option>)
  const location = locations.map(location => <option value={location}>{location}</option>)
  return(
    <div className="mx-auto rounded-lg shadow-xl py-16 px-10">
      <h1 className="font-bold text-2xl mb-5">Book your Tesla</h1>
      <div>
        <div className="bg-red-200 flex justify-between p-3 rounded-lg text-lg mb-5 hidden">
          <p>All fields required!</p>
          <button>X</button>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 content-center">

          <div className="flex flex-col gap-1">
            <label className="font-bold text-lg" htmlFor="car"><FontAwesomeIcon icon={faCar} style={{color: "#e32400",}} /> Select your Car Type <span className="text-red-600">*</span></label>
            <select className="text-slate-500 border p-2" name="car" id="car">
              <option selected disabled hidden>Select your car</option>
              {car}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold text-lg" htmlFor="pick"><FontAwesomeIcon icon={faLocationDot} style={{color: "#e32400",}} /> Pick-Up <span className="text-red-600">*</span></label>
            <select className="text-slate-500 border p-2" name="pick" id="pick">
              <option selected disabled hidden>Select your pick-up location</option>
              {location}
            </select>
          </div>


          <div className="flex flex-col gap-1">
            <label className="font-bold text-lg" htmlFor="drop"><FontAwesomeIcon icon={faLocationDot} style={{color: "#e32400",}} /> Drop Off <span className="text-red-600">*</span></label>
            <select className="text-slate-500 border p-2" name="drop" id="drop">
              <option selected disabled hidden>Select your drop off location</option>
              {location}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold text-lg" htmlFor="pickDate"><FontAwesomeIcon icon={faCalendarDays} style={{color: "#e32400",}} /> Pick-Up <span className="text-red-600">*</span></label>
            <div className="" id="pickDate"><DatePick /></div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-bold text-lg" htmlFor="dropDate"><FontAwesomeIcon icon={faCalendarDays} style={{color: "#e32400",}} /> Drop Off <span className="text-red-600">*</span></label>
            <div id="dropDate"><DatePick /></div>
          </div>

          <button className='py-3 px-10 border bg-red-500 active:bg-red-600 rounded-md text-white font-bold text-md hover:shadow-md'>Reserve</button>
        </form>
      </div>
    </div>
  )
}
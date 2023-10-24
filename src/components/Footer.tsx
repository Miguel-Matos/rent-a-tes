import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <div>
      <hr />
      <footer className="flex">
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-10 my-14">
          <div className="flex flex-col items-center md:items-start gap-5">
            <h3 className="text-3xl font-bold">Rent a Tes</h3>
            <p className="text-center md:text-start text-slate-600">Rent a Tes is a portfolio project created by Miguel Matos. If you are interested in working together, please contact me below.</p>
            <a href="tel:3528182577"><FontAwesomeIcon icon={faPhone} /> (352)-818-2577</a>
            <a href="mailto: miguel@matosmiguel.com"><FontAwesomeIcon icon={faEnvelope} /> Miguel@matosmiguel.com</a>
          </div>

          <div className="flex flex-col items-center md:items-start gap-5">
            <h3 className="text-3xl font-bold">Contact Hours</h3>
            <p>Mon - Fri: 9:00AM - 9:00PM</p>
            <p>Sat: 9:00AM - 7:00PM</p>
            <p>Sun: Closed</p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-5">
            <h3 className="text-3xl font-bold">Miguel's Info</h3>
            <a className="block" target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/miguelmatosjp/">Linkedin</a>
            <a className="block" target='_blank' rel='noreferrer' href="https://github.com/Miguel-Matos">GitHub</a>
            <a className="block" target='_blank' rel='noreferrer' href="https://www.matosmiguel.com">Website</a>
            {/* <a className="block" target='_blank' rel='noreferrer' href="#home">Values</a> */}
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-3xl font-bold">Subscription</h3>
            <p>Subscribe for the latest news and updates</p>
            <form className="flex flex-col gap-5 w-full mt-5">
              <input className="border p-2 flex-1" type="email" placeholder="Enter Email Address" />
              <button className="border p-2 bg-red-500 active:bg-red-600 text-white text-lg font-bold">Submit</button>
            </form>
          </div>
      </div>
    </footer>
    </div>
  );
}

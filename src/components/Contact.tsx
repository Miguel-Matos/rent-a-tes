import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import world from '../img/world.svg'

export default function Contact() {

  return(
    <div className="flex flex-col items-center lg:flex-row lg:gap-5 xl:gap-10 2xl:gap-14">
      <div>
        <h3 className="text-4xl font-bold text-center lg:text-left mb-10">Need additional information?</h3>
        <p className="text-center lg:text-left mb-5 text-lg text-slate-600">A team of skilled professionals with over 15 years of experience are happy to assist with any questions or concerns.</p>
        <div className="flex flex-col gap-5 font-bold my-5 items-center lg:items-start">
          <a href="tel:1234567890"><FontAwesomeIcon icon={faPhone} /> (123)-456-7890</a>
          <a href="mailto: rentates@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> Rentates@gmail.com</a>
          <p><FontAwesomeIcon icon={faLocationDot} /> Orlando, Florida</p>
        </div>
      </div>

      <form className="flex flex-col w-full mb-32">
        <label className="text-center lg:text-left font-bold py-5 text-lg" htmlFor="name">Full Name<span className='text-red-500'>*</span></label>
        <input className="border bg-slate-100 p-5" type="text" id="name" placeholder="John Smith" required />

        <label className="text-center lg:text-left font-bold py-5 text-lg"  htmlFor="email">Email<span className='text-red-500'>*</span></label>
        <input className="border bg-slate-100 p-5" type="email" id="email" placeholder="John@gmail.com" required />

        <label className="text-center lg:text-left font-bold py-5 text-lg" htmlFor="info">Tell us about it<span className='text-red-500'>*</span></label>
        <textarea className="border bg-slate-100 p-5" id="info" placeholder="Description" />

        <button className=" bg-red-500 p-5 text-white font-bold text-lg mt-10 shadow-md hover:shadow-2xl focus:bg-red-600 rounded-md"><FontAwesomeIcon icon={faEnvelopeOpenText} /> Send Message</button>
      </form>

      <div className='absolute -z-10 pointer-events-none overflow-hidden'>
        <img className='opacity-20  object-none' src={world} alt="world" />
      </div>

    </div>

  ) 
}
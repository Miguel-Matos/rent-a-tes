export default function Contact() {

  return(
    <div className="flex flex-col items-center">
      <h3 className="text-4xl font-bold text-center mb-16">Need additional information?</h3>
      <p className="text-center">A team of skilled professionals with over 15 years of experience are happy to assist with any questions or concerns.</p>
      <div className="flex flex-col gap-5 font-bold my-5 items-center">
        <a href="tel:1234567890">(123)-456-7890</a>
        <a href="mailto: rentates@gmail.com">Rentates@gmail.com</a>
        <p>Orlando, Florida</p>
      </div>
      <form className="flex flex-col w-full">
        <label className="text-center font-bold py-5 text-2xl" htmlFor="name">Full Name</label>
        <input className="border bg-slate-100 p-5" type="text" id="name" placeholder="John Smith" required />

        <label className="text-center font-bold py-5 text-2xl"  htmlFor="email">Email</label>
        <input className="border bg-slate-100 p-5" type="email" id="email" placeholder="John@gmail.com" required />

        <label className="text-center font-bold py-5 text-2xl" htmlFor="info">Tell us about it</label>
        <textarea className="border bg-slate-100 p-5" id="info" placeholder="Description" />

        <button className=" bg-red-500 p-10 text-white font-bold text-2xl mt-10 mb-32 shadow-md hover:shadow-2xl rounded-md">Send Message</button>
      </form>
    </div>

  ) 
}
export default function Footer() {
  return (
    <footer className="grid sm:grid-cols-2 grid-cols-1 gap-4">
      <div>
        <h3 className="text-3xl font-bold">Rent a Tes</h3>
        <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
        <a href="tel:1234567890">(123)-456-7890</a>
        <br />
        <a href = "mailto: rentates@gmail.com">Rentates@gmail.com</a>
      </div>

      <div>
        <h3 className="text-3xl font-bold">Working Hours</h3>
        <p>Mon - Fri: 9:00AM - 9:00PM</p>
        <p>Sat: 9:00AM - 19:00PM</p>
        <p>Sun: Closed</p>
      </div>

      <div>
        <h3 className="text-3xl font-bold">Company</h3>
        <a href="#home">Orlando</a>
        <a href="#home">Careers</a>
        <a href="#home">Blog</a>
        <a href="#home">Values</a>
      </div>

      <div>
        <h3 className="text-3xl font-bold">Subscription</h3>
        <p>Subscribe for the latest news and updates</p>
        <form>
          <input type="email" placeholder="Enter Email Address" />
          <button>Submit</button>
        </form>
      </div>
    </footer>
  )
}
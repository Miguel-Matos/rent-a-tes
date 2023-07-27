import TopBanner from "./TopBanner"

export default function Contact() {

  return(
    <div>
      <TopBanner name='Contact' />
      <h3>Need additional information?</h3>
      <p>A team of skilled professionals with over 15 years of experience are happy to assist with any questions or concerns.</p>
      <a href="tel:1234567890">(123)-456-7890</a>
      <a href="mailto: rentates@gmail.com">Rentates@gmail.com</a>

      <form>
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" placeholder="John Smith" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="John@gmail.com" required />

        <label htmlFor="info">Tell us about it</label>
        <textarea id="info" placeholder="Description" />

        <button>Send Message</button>
      </form>
    </div>

  ) 
}
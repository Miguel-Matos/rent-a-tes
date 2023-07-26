import logo from '../logo.png';

export default function Header() {
  return (
    <div className='flex justify-between my-14 text-lg font-bold'>
      <img className='w-10 md:w-16' src={logo} alt='Logo' />
      <a href='#'>Home</a>
      <a href="#">About</a>
      <a href="#">Models</a>
      <a href="#">Testimonials</a>
      <a href="#">Our Team</a>
      <a href="#">Contact</a>
    </div>
  )
}
import about from '../img/about.webp';

export default function About() {
  return(
    <div className='2xl:mt-10'>
      <div className='flex gap-5 xl:gap-10 flex-col items-center lg:flex-row'>
        <img className='lg:w-1/2 object-contain' src={about} alt='about' />
        <div className='flex flex-col gap-5'>
          <h1 className='text-xl font-bold'>About the Company</h1>
          <h2 className='text-4xl font-bold'>Your adventure begins with a Tesla</h2>
          <p className=' text-slate-600'>Welcome to Rentates, your passport to the future of driving! Our fleet of cutting-edge Tesla vehicles is here to transform your road trips into electrifying adventures. With Rentates, you're not just renting a car – you're stepping into a world of innovation, luxury, and eco-conscious exploration. Join us in paving the way for a greener and more exhilarating driving experience.</p>
        </div>
      </div>
          </div>
  ); 
};
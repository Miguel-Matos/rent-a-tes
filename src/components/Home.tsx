import redTes from '../img/top3.png'

function Plan() {
  return(
    <div className='lg:grid lg:grid-cols-2 2xl:grid-cols-3 gap-10 items-center'>
      <div className='text-center lg:text-left mx-5 flex flex-col gap-5'>
        <h2 className='text-2xl font-bold'>Plan your trip now</h2>
        <h1 className='text-5xl font-bold'>Save <span className='text-red-500'>big</span> with our car rental</h1>
        <p className='text-slate-600'>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
        <div className='flex gap-4 justify-center lg:justify-start'>
          <button className='py-3 px-10 border bg-red-500 active:bg-red-600 rounded-md text-white font-bold text-md hover:shadow-md'>Book Ride</button>
          <button className='py-3 px-10 border bg-black active:bg-slate-100 rounded-md text-white font-bold text-md hover:shadow-md hover:bg-white hover:text-black'>Learn More</button>
        </div>
      </div>
      <img className=' object-scale-down 2xl:h-96 hidden lg:block 2xl:col-span-2' src={redTes} alt='red tesla' />
    </div>
  )
}


export default function Home() {

  return(
    <div>
      <Plan />
    </div>

  ) 

  
}
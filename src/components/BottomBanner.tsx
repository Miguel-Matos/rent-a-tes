import bottom from '../img/modelY.png'

export default function BottomBanner() {
  return(
      <div className='bg-black text-white mt-16'>
        <div className='flex h-40 flex-col md:flex-row items-center justify-around'>
          <h1 className='text-4xl font-bold z-20'>Book a Tesla today!</h1>

          <div className='absolute overflow-hidden h-40 flex flex-col justify-center'>
            <img className='pointer-events-none object-none' src={bottom} alt='bottom banner' />
          </div>
          
          <a className='text-4xl font-bold text-red-600 z-20' href="tel:1234567890">(123)-456-7890</a>
        </div>
      </div>
  )
}
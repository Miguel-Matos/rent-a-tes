import top from '../img/top2.png'

export default function TopBanner(props: {name: string}) {
  return(
    <div className='h-[400px]'>
      <div className='absolute top-0 left-0  pointer-events-none overflow-hidden'>
        <img className='opacity-20 min-h-[500px] object-cover' src={top} alt="top banner" />
      </div>
      <div className='md:flex md:justify-center'>
        <h1 className='text-4xl font-bold px-5 w-3/4'>{props.name}</h1>
      </div>
    </div>

// min-h-[250px] xl:min-h-[275px] 2xl:min-h-[300px]
  )
}
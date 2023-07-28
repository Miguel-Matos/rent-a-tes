import top from '../img/top2.png'

export default function TopBanner(props: {name: string}) {
  return(
    <div className='w-fit overflow-hidden'>
      <div className='absolute top-0 left-0 min-w-[1500px] max-w-[4000px] overflow-hidden'>
        <img className='opacity-20' src={top} alt="top banner" />
      </div>
      <div className='min-h-[250px] xl:min-h-[275px] 2xl:min-h-[300px]'>
        <h1 className='text-4xl font-bold'>{props.name}</h1>
      </div>
    </div>

  )
}
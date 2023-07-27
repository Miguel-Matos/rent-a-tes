import top from '../img/top.png'

export default function TopBanner(props: {name: string}) {
  return(
    <div className='absolute top-0 left-0 min-w-[1000px] max-w-[1200px]'>
      <img className='opacity-10' src={top} alt="top banner" />
      <h1 className='absolute top-0 left-0 text-4xl font-bold'>{props.name}</h1>
    </div>
  )
}
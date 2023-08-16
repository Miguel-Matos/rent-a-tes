import model3 from '../img/3.png'
import modelY from '../img/y.png'
import modelS from '../img/s.png'
import modelX from '../img/x.png'
import { useState } from 'react'

export default function CarComparison() {
  const cars: {
    pic: string;
    name: string;
    stars: string;
    price: number;
    range: number;
    speed: number;
    mph: number
  }[] = [
    {
      pic: model3,
      name: 'Model 3',
      stars: '⭐️⭐️⭐️',
      price: 45,
      range: 272,
      speed: 140,
      mph: 5.8
    },
    {
      pic: modelY,
      name: 'Model Y',
      stars: '⭐️⭐️⭐️',
      price: 50,
      range: 330,
      speed: 135,
      mph: 4.8
    },
    {
      pic: modelS,
      name: 'Model S',
      stars: '⭐️⭐️⭐️⭐️',
      price: 60,
      range: 405,
      speed: 149,
      mph: 3.1
    },
    {
      pic: modelX,
      name: 'Model X',
      stars: '⭐️⭐️⭐️⭐️⭐️',
      price: 75,
      range: 348,
      speed: 149,
      mph: 3.8
    }
  ]

  const [carList, setCar] = useState('Model 3')
  const [carImg, setImg] = useState(model3)
  const [price, setPrice] = useState(45)
  const [stars, setStars] = useState('⭐️⭐️⭐️')
  const [range, setRange] = useState(272)
  const [speed, setSpeed] = useState(140)
  const [mph, setMph] = useState(5.8)

  const carSelect = cars.map(car => <button key={car.name} onClick={() => {
    setCar(car.name)
    setImg(car.pic)
    setPrice(car.price)
    setStars(car.stars)
    setRange(car.range)
    setSpeed(car.speed)
    setMph(car.mph)
  }} className='bg-slate-300 hover:bg-red-500 active:bg-red-500 focus:bg-red-500 py-5 text-lg font-bold hover:text-white focus:text-white active:text-white'>{car.name}</button>)
  return(
    <div className='mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-4 mt-16 items-center'>
      <div className='flex flex-col gap-2 mb-10 lg:mb-0'>{carSelect}</div>
      <div className='col-span-3 grid grid-cols-1 lg:grid-cols-6 items-center'>
        <img className='col-span-5 mb-10 lg:mb-0' src={carImg} alt='Tesla' />
        <div className='flex flex-col gap-2 text-center lg:text-left'>
          <h2 className='text-xl font-bold'>{carList}</h2>
          <h3 className='text-lg font-bold'>${price} per day</h3>
          <p>{stars}</p>
          <p><span className='font-bold'>{range}</span> mi Range</p>
          <p><span className='font-bold'>{speed}</span> mph top speed</p>
          <p><span className='font-bold'>{mph}</span> sec</p>
        </div>
      </div>

    </div>
    </div>

  )
}
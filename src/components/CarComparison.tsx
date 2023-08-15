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

  const carSelect = cars.map(car => <button onClick={() => {
    setCar(car.name)
    setImg(car.pic)
  }} className='bg-slate-300 hover:bg-red-500 active:bg-red-500 focus:bg-red-500'>{car.name}</button>)
  return(
    <div>
      <div className='flex flex-col gap-2'>{carSelect}</div>
      <img src={carImg} alt='Tesla' />
    </div>
  )
}
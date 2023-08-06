import mod3 from '../img/modelPage3.jpg'
import y from '../img/modelPageY.jpg'
import s from '../img/modelPageS.jpg'
import x from '../img/modelPageX.jpg'

function Card() {
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
      pic: mod3,
      name: 'Model 3',
      stars: '⭐️⭐️⭐️',
      price: 45,
      range: 272,
      speed: 140,
      mph: 5.8
    },
    {
      pic: y,
      name: 'Model Y',
      stars: '⭐️⭐️⭐️',
      price: 50,
      range: 330,
      speed: 135,
      mph: 4.8
    },
    {
      pic: s,
      name: 'Model S',
      stars: '⭐️⭐️⭐️⭐️',
      price: 60,
      range: 405,
      speed: 149,
      mph: 3.1
    },
    {
      pic: x,
      name: 'Model X',
      stars: '⭐️⭐️⭐️⭐️⭐️',
      price: 75,
      range: 348,
      speed: 149,
      mph: 3.8
    }
  ]
  const card = cars.map(car => 
    <div className='border flex flex-col'>
      <img src={car.pic} alt={car.name} />
      <div className='flex justify-between m-5 mb-5'>
        <div>
          <h2 className='text-2xl sm:text-3xl font-bold mb-2'>{car.name}</h2>
          <p>{car.stars}</p>
        </div>
          <p className='text-2xl sm:text-3xl font-bold'>${car.price} per day</p>
      </div>
      

      <div className='flex justify-between gap-1 mx-5 mb-5 text-center'>
        <div className='flex flex-col items-center'>
          <p className=''>{car.range} mi</p>
          <p>Range (EPA est.)</p>
        </div>
        <div className='flex flex-col items-center'>
          <p>{car.speed} mph</p>
          <p>Top Speed</p>
        </div>
        <div className='flex flex-col items-center'>
          <p>{car.mph} sec</p>
          <p>0-60 mph</p>
        </div>
      </div>
      <hr className='w-3/4 mx-auto' />
      <button className="bg-red-500 p-5 text-white font-bold text-lg mt-10 shadow-md hover:shadow-2xl focus:bg-red-600 rounded-md w-3/4 mx-auto mb-10">Book Ride</button>
    </div>)

    return(
      <div className='grid grid-cols-1 lg:grid-cols-2  gap-5'>{card}</div>
    )
}

export default function Models() {

  return(
    <div>
      <Card />
    </div>

  ) 

  
}
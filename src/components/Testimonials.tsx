import head1 from '../img/head1.jpg'
import head2 from '../img/head2.jpg'

function Card() {
  const reviews : {
    name: string;
    pic: string;
    review: string;
  }[] = [
    { 
      name: 'Naka Dashi',
      pic: head1,
      review: '"Driving a Tesla is the best way to let others know that you are better than them. I cannot afford one normally, so this service helps maintain the illusion. Thank you Rentates!"'
    },
    {
      name: 'Jason Nuddinyore',
      pic: head2,
      review: '"Rentates is the Tesla dreamland of rentals! Cruising emission-free in their sleek electric cars made me feel like a hero on a mission! Bravo, Rentates, for making green driving an electrifying joy!"'
    }
  ]

  const reviewCard = reviews.map(review => 
    <div className=' shadow-lg p-20 flex flex-col justify-between'>
      <h2 className="text-xl font-bold pb-5">{review.review}</h2>
      <div className='flex items-center'>
        <img className=' rounded-full w-20 mr-5' src={review.pic} alt='pic'/>
        <p className='font-bold text-lg'>{review.name}</p>
      </div>
    </div>)

  return (
    <div className='flex flex-col lg:flex-row gap-5'>{reviewCard}</div>
  )
}

export default function Testimonials() {



  return(
    <div className="flex flex-col items-center py-14 mx-auto">
      <h3 className="text-xl font-bold pb-5">Reviewed by People</h3>
      <h1 className="text-4xl font-bold pb-10 text-center">Client's Testimonials</h1>
      <p className=" text-slate-600 text-center mb-16">We take pride in the positive impact we've made on our clients, and you can see it firsthand by exploring the heartwarming testimonials from our satisfied customers. From eco-conscious road trippers to tech-savvy explorers, our clients have experienced the thrill of driving Tesla's finest, and they can't wait to share their joy with you! So, hop on board, embrace the excitement, and be part of the Rentates family – where driving becomes a delightful, emissions-free delight!</p>
      <div>
        <Card />
      </div>

    </div>

  ) 

  
}
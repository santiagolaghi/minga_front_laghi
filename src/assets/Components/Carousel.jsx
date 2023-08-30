import { useEffect, useState } from 'react'
import ArrowLeft from './ArrowLeft'
import ArrowRigth from './ArrowRigth'
import axios from 'axios'

export default function Carousel() {
  let [categories, setCategories] = useState([])
  let [counter, setCounter] = useState(0)
  function getData() {
    axios('https://minga-back-vyqy.onrender.com/categories')
      .then(res => setCategories(res.data.categories))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getData(),
      []
  })

  let next = () => (counter !== categories.length - 1) ? setCounter(counter + 1) : setCounter(0)
  let prev = () => (counter !== 0) ? setCounter(counter - 1) : setCounter(categories.length - 1)

  return (

    <div className="max-md:hidden md: my-5 w-10/12 h-56 bg-gradient-to-b from-orange-600 to-orange-500 flex items-center px-5 justify-between md:h-1/4">
      <ArrowLeft onClick={prev} />
      <img className="h-40 mb-10" src={categories[counter]?.character_photo} alt="" />
      <img className="h-40 mb-8" src={categories[counter]?.cover_photo} alt="" />
      <div className='md:w-48 lg:w-96'>
        <h4 className='text-white md:text-center lg:text-left'>{categories[counter]?.name}</h4>
        <p className='text-white text-xs md:text-center lg:text-left'>{categories[counter]?.description}</p>
      </div>
      <ArrowRigth onClick={next} />
    </div>
  )
}

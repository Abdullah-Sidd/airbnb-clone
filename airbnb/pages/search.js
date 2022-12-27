import React from 'react'
import { client } from '../lib/client';
import { urlFor } from '../lib/client';
import { useRouter } from 'next/router'
import { format } from 'date-fns'
const Search = ({results}) => {
  const router = useRouter()
  // console.log(router.query)
  const { location, startDate, endDate } = router.query
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')
  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
  const range = `${formattedStartDate} to ${formattedEndDate}`
  return (
    <div>
   <p className=' mt-6 text-center text-xl text-red-700 font-bold'>250+ Stay  in {location} from {range} Date.</p>
    <section class="text-gray-600 body-font">
{results.map((item)=>{
 return <><div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
   <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
     <img class="object-cover object-center rounded" alt="hero" src={urlFor(item.image && item.image[0])} />
   </div>
   <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
     <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{item.title}
     </h1>
     <p class="mb-8 leading-relaxed">{item.description}</p>
     <div class="flex justify-center">
     <a   href={`/product/${item.slug.current}`} class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">Explore More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
     </div>
   </div>
 </div><hr /></>
})}
</section>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "properties"]';
  const results = await client.fetch(query);
  return {
    props: { results }
  }
}

export default Search

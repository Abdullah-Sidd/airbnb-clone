import React from 'react'
import { client } from '../../lib/client'
import { urlFor } from '../../lib/client'
// import getStripe from '../../lib/getStripe'
// import { loadStripe } from '@stripe/stripe-js';
// import axios from 'axios';
const Slug= ({post}) => {
  // const createCheckOutSession = async () => {
  //   const stripe = await getStripe();

  //   const checkoutSession = await axios.post("/api/stripe", {
  //     post: post,
  //   });
  // };


  return (
<div class="bg-white">
  <div class="pt-6">
    <nav aria-label="Breadcrumb">
      <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <li>
          <div class="flex items-center">
            <a href="#" class="mr-2 text-sm font-medium text-gray-900">Men</a>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-4 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>

        <li>
          <div class="flex items-center">
            <a href="#" class="mr-2 text-sm font-medium text-gray-900">Clothing</a>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-4 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>

        <li class="text-sm">
          <a href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">{post.title}</a>
        </li>
      </ol>
    </nav>

    <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <div class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
        <img src={urlFor(post.image && post.image[0])} alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center"/>
      </div>
      <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
          <img src={urlFor(post.image && post.image[1])} alt="Model wearing plain black basic tee." class="h-full w-full object-cover object-center"/>
        </div>
        <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
          <img src={urlFor(post.image && post.image[2])} alt="Model wearing plain gray basic tee." class="h-full w-full object-cover object-center"/>
        </div>
      </div>
      <div class="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
        <img src={urlFor(post.image && post.image[3])}alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center"/>
      </div>
    </div>

    <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
      <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{post.title}</h1>
      </div>

      <div class="mt-4 lg:row-span-3 lg:mt-0">
        <h2 class="sr-only">Product information</h2>
        <p class="text-3xl tracking-tight text-gray-900">₹{post.pricePerNight} per night.</p>

        <div class="mt-6">
          <h3>Reviews</h3>
          <div class="flex items-center">
            <div class="flex items-center">
             
              <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>

              <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>

              <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>

              <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>

              <svg class="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
              </svg>
            </div>
            <p class=" text-black">Rating</p>
            {/* <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a> */}
          </div>
        </div>

        <form class="mt-10">
          <div>
            <h3 class="text-sm font-medium text-gray-900">{post.propertyType}</h3>

            <fieldset class="mt-4">
              <legend class="sr-only">Choose a color</legend>
              <div class="flex items-center space-x-3">
                
                <label class="-m-0.5  p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                  <input type="radio" name="color-choice" value="White" class="sr-only" aria-labelledby="color-choice-0-label"/>
                  <span id="color-choice-0-label" class="sr-only"> White </span>
                  <span aria-hidden="true" class="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"></span>
                </label>

              
                <label class="-m-0.5  p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                  <input type="radio" name="color-choice" value="Gray" class="sr-only" aria-labelledby="color-choice-1-label"/>
                  <span id="color-choice-1-label" class="sr-only"> Gray </span>
                  <span aria-hidden="true" class="h-8 w-8 bg-black border border-black border-opacity-10 rounded-full"></span>
                </label>

             
                <label class="-m-0.5  p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                  <input type="radio" name="color-choice" value="Black" class="sr-only" aria-labelledby="color-choice-2-label"/>
                  <span id="color-choice-2-label" class="sr-only"> Black </span>
                  <span aria-hidden="true" class="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"></span>
                </label>
              </div>
            </fieldset>
          </div>

          <div class="mt-10">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-medium text-gray-900">Size</h3>
              <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
            </div>

            <fieldset class="mt-4">
              <legend class="sr-only">Choose a size</legend>
              <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-gray-50 text-gray-200 cursor-not-allowed">
                  <input type="radio" name="size-choice" value="XXS" disabled class="sr-only" aria-labelledby="size-choice-0-label"/>
                  <span id="size-choice-0-label">XXS</span>

                  <span aria-hidden="true" class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                    <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                      <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                    </svg>
                  </span>
                </label>

                <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                  <input type="radio" name="size-choice" value="XS" class="sr-only" aria-labelledby="size-choice-1-label"/>
                  <span id="size-choice-1-label">XS</span>

                  <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                </label>

                <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                  <input type="radio" name="size-choice" value="S" class="sr-only" aria-labelledby="size-choice-2-label"/>
                  <span id="size-choice-2-label">S</span>

                  
                  <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                </label>

                <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                  <input type="radio" name="size-choice" value="M" class="sr-only" aria-labelledby="size-choice-3-label"/>
                  <span id="size-choice-3-label">M</span>

                  <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                </label>

                <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                  <input type="radio" name="size-choice" value="L" class="sr-only" aria-labelledby="size-choice-4-label"/>
                  <span id="size-choice-4-label">L</span>

               
                  <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                </label>

                <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                  <input type="radio" name="size-choice" value="XL" class="sr-only" aria-labelledby="size-choice-5-label"/>
                  <span id="size-choice-5-label">XL</span>

              
                  <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                </label>

                <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                  <input type="radio" name="size-choice" value="2XL" class="sr-only" aria-labelledby="size-choice-6-label"/>
                  <span id="size-choice-6-label">2XL</span>

               
                  <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                </label>

                <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                  <input type="radio" name="size-choice" value="3XL" class="sr-only" aria-labelledby="size-choice-7-label"/>
                  <span id="size-choice-7-label">3XL</span>

                 
                  <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                </label>
              </div>
            </fieldset>
          </div>

        </form>
        <button class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" 
        >Book Now</button>

      </div>

      <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
        <div>
          <h3 class="sr-only">Description</h3>

          <div class="space-y-6">
            <p class="text-base text-gray-900">{post.description}</p>
          </div>
        </div>

        <div class="mt-10">
          <h3 class="text-sm font-medium text-gray-900">Highlights</h3>

          <div class="mt-4">
            <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
              <li class="text-gray-400"><span class="text-gray-600">Ample free parking on site.</span></li>

              <li class="text-gray-400"><span class="text-gray-600">All pets are allowed for the guest during their stay.</span></li>

              <li class="text-gray-400"><span class="text-gray-600">Air-conditioning and heating available.</span></li>

              
              <li class="text-gray-400"><span class="text-gray-600">Bonefire can be arranged.</span></li>
              <li class="text-gray-400"><span class="text-gray-600">Gardening, farming, cricket, board games are available.</span></li>
              <li class="text-gray-400"><span class="text-gray-600"> 24X7 house help available.</span></li>

            </ul>
          </div>
        </div>

        <div class="mt-10">
          <h2 class="text-sm font-medium text-gray-900">Details</h2>

          <div class="mt-4 space-y-6">
            <p class="text-sm text-gray-600">Kusum Vatika is a luxury farmhouse on an acre of land surrounded by green gardens with three fully furnished bedrooms, a grand living space, and a dining hall. When booked the entire property is available for the guests to enjoy. All rooms are fully air-conditioned for summer and heated for winters. Guests can enjoy a calming and peaceful time in the lap of greenery away from the city hustle. A fully functional kitchen is available with an option to request a cook. The site is safe and secure.
The space
- Ample free parking on site.
- All pets are allowed for the guest during their stay.
- Site is safe and secure with 24-hour electronic/CCTV monitoring.
- Power backup/invertor.
- Air-conditioning and heating available.
- Local tours organized on request.
- Fully functional kitchen.
- Cook is available on request.
- Bonefire can be arranged.
- Gardening, farming, cricket, board games are available.
- 24X7 house help available.
Guest access
The farmhouse has plenty of space for parking. Guests receive access to bedrooms based on the number of guests. All guests have access to the private gardens at the property.
Other things to note
The farmhouse is located near major highways such as the eastern peripheral expressway and is well connected to Delhi, Faridabad, and Agra.

The place is located at Bhadurpur, Faridabad. For getting an idea of the location, guests can search for "Kusum Vatika, Bhadurpur".</p>
          </div>
        </div>
      </div>
    </div>
  </div>


  <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Things to know</h1>
    </div>
    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Check-in: After 10:00 am</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Check out: 12:00 pm</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Pets are allowed</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Smoking is allowed</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">
Security camera/recording device Show more</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Airbnb's COVID-19 safety practices apply</span>
        </div>
      </div>
    </div>
    <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
  </div>
</section>


<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
<h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 text-center ">Reviews</h1>
  <div class="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3 mt-11 ">
    <div class="p-8 border-b sm:border-r">
      <div class="max-w-md text-center  ">
        <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
        <div className="w-24 rounded-xl">
    <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/99E8/production/_124300493_whatsubject.jpg.webp" className='rounded-full h-16 object-cover' />
  </div>
        </div>
        <h6 class="mb-2 font-semibold leading-5">The quick fox</h6>
        <p class="mb-3 text-sm text-gray-900">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.
        </p>
      </div>
    </div>
    
    <div class="p-8 border-b lg:border-r">
      <div class="max-w-md text-center">
        <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
        <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/121D8/production/_124300247_whatsubject.jpg.webp" className='rounded-full h-16 object-cover' />

        </div>
        <h6 class="mb-2 font-semibold leading-5">Leverage agile</h6>
        <p class="mb-3 text-sm text-gray-900">
          Storage shed, troughs feed bale manure, is garden wheat oats at augers. Bulls at rose garden cucumbers mice sunflower wheat in pig.
        </p>
      </div>
    </div>
    <div class="p-8 border-b sm:border-r lg:border-r-0">
      <div class="max-w-md text-center">
        <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
          <svg class="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <h6 class="mb-2 font-semibold leading-5">Organically grow</h6>
        <p class="mb-3 text-sm text-gray-900">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.
        </p>
      </div>
    </div>
    <div class="p-8 border-b lg:border-b-0 lg:border-r">
      <div class="max-w-md text-center">
        <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
          <svg class="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <h6 class="mb-2 font-semibold leading-5">Have a good one</h6>
        <p class="mb-3 text-sm text-gray-900">
          Storage shed, troughs feed bale manure, is garden wheat oats at augers. Bulls at rose garden cucumbers mice sunflower wheat in pig.
        </p>
      </div>
    </div>
    <div class="p-8 border-b sm:border-b-0 sm:border-r">
      <div class="max-w-md text-center">
        <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
          <svg class="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <h6 class="mb-2 font-semibold leading-5">Trough pomfret</h6>
        <p class="mb-3 text-sm text-gray-900">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.
        </p>
      </div>
    </div>
    <div class="p-8">
      <div class="max-w-md text-center">
        <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
          <svg class="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12" stroke="currentColor" viewBox="0 0 52 52">
            <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
          </svg>
        </div>
        <h6 class="mb-2 font-semibold leading-5">Disrupt inspire</h6>
        <p class="mb-3 text-sm text-gray-900">
          Storage shed, troughs feed bale manure, is garden wheat oats at augers. Bulls at rose garden cucumbers mice sunflower wheat in pig.
        </p>
      </div>
    </div>
  </div>
</div>



<footer class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left  lg:mt-7 ">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Tailblocks</span>
      </a>
      <p class="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
    </div>
    <div class="flex-grow flex flex-wrap md:pr-20  md:text-left text-center order-first mb-5">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@knyttneve</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
</div>

  )
}


export const getServerSideProps = async ({ params: { slug }}) => {
  const query = `*[_type == "properties" && slug.current == '${slug}'][0]`;
  
  const post = await client.fetch(query);

  return {
    props: { post }
  }
}
export default Slug

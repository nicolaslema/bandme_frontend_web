import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const EventDetails = () => {
  
  let{id} = useParams()
  const [eventInfo, setEventInfo] = useState([]);
  const url = `https://bandme-dashboard-api.herokuapp.com/api/v1/dashboard/get-post-details?posteoId=${id}`
  
  useEffect(()=>{

 

    
    const fetchPostbyId =  async(id)=>{
      const response = await fetch(url);
      const data = await response.json()
      setEventInfo(data.data);
    
      

    }
     fetchPostbyId(id);
  

  },  [])
  




  return (
    <div>
   
   <div class="mx-auto bg-bandme_dark h-screen flex items-center justify-center px-8">
  <div class="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
    <div class="w-full h-64 bg-top bg-cover rounded-t" >
      <img class="w-full h-64 bg-top bg-cover rounded-t" src='https://www.si.com/.image/t_share/MTY4MTkyMjczODM4OTc0ODQ5/cfp-trophy-deitschjpg.jpg'></img>

    </div>
    <div class="flex flex-col w-full md:flex-row">
        <div class="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-bandme_orange rounded md:flex-col md:items-center md:justify-center md:w-1/4">
          <div class="md:text-3xl">{eventInfo.date}</div>
            
            <div class="md:text-xl">{eventInfo.time}</div>
        </div>
        <div class="p-4 font-normal text-gray-800 md:w-3/4">
            <h1 class="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800"> {eventInfo.title}</h1>
            <p class="leading-normal">{eventInfo.description}</p>
            <div class="flex flex-row items-center mt-4 text-gray-700">
                <div class="w-1/2">
                    {eventInfo.street} - {eventInfo.street_number}
                </div>
                <div class="w-1/2 flex justify-end items-center">
                    <img className='w-24 h-24 rounded-full' src={eventInfo.profile_photo} alt="" class="w-8"></img>
                    <p className='ml-6'>{eventInfo.first_name} {eventInfo.last_name}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

    </div>
  )
}

export default EventDetails
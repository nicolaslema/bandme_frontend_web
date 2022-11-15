import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getAllEventInfo } from '../../api/getEventDetails';
import {getAllEventImages} from '../../api/getEventImages';
import EventProgressBar from './EventProgressBar';
import EventInfoError from './EventInfoError';
import EventInfo from './EventInfo';

const EventDetails = () => {
  
  const {id} = useParams()
  const [eventInfo, setEventInfo] = useState([]);
  const [eventImage, setEventImage] = useState('');
  const [profileImage, setProfileImage]  = useState('');
  const [loading, setLoading] = useState(true);
  const {error, setError} = useState(false);

  
  useEffect(()=>{
    
    setTimeout(()=>{
     
      
      getAllEventInfo(id)
      .then(data =>{
        setEventInfo(data.data)

        getAllEventImages(data.data).then(arr =>{
          const response = JSON.parse(JSON.stringify(arr))
          setEventImage(response[0][1])
          setProfileImage(response[0][0])
        }).catch(err => console.log(err))

        setLoading(false)
      })
      .catch((e)=>{
        console.error(e)
        
      })


      

    },2000);

  }, [])
  

 

 
  return (
    <div className='bg-bandme_dark'>


    {
      error ? <EventInfoError/> : " "
    }
      
    {
      loading ? <EventProgressBar/> 
      : 
      <EventInfo 
      title={eventInfo.title}
      date={eventInfo.date}
      time={eventInfo.time}
      description={eventInfo.description}
      street = {eventInfo.street}
      image_url = {eventImage}
      street_number = {eventInfo.street_number}
      profile_photo = {profileImage}
      first_name = {eventInfo.first_name}
      last_name  = {eventInfo.last_name}
    />
    } 

    



    

{/* 
<div className="mx-auto bg-bandme_dark h-screen flex items-center justify-center px-8">
  <div className="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
    <div className="w-full h-64 bg-top bg-cover rounded-t" >
      <img className="w-full h-64 bg-top bg-cover rounded-t" src='https://www.si.com/.image/t_share/MTY4MTkyMjczODM4OTc0ODQ5/cfp-trophy-deitschjpg.jpg'></img>
    </div>
    <div className="flex flex-col w-full md:flex-row">
        <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-bandme_orange rounded md:flex-col md:items-center md:justify-center md:w-1/4">
          <div className="md:text-3xl">{eventInfo.date}</div>
            
            <div className="md:text-xl">{eventInfo.time}</div>
        </div>
        <div className="p-4 font-normal text-gray-800 md:w-3/4">
            <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800"> {eventInfo.title}</h1>
            <p className="leading-normal">{eventInfo.description}</p>
            <div className="flex flex-row items-center mt-4 text-gray-700">
                <div className="w-1/2">
                    {eventInfo.street} - { eventInfo.street_number}
                </div>
                <div className="w-1/2 flex justify-end items-center">
                    <img className='w-8 rounded-full'  alt="" src={eventInfo.profile_photo} ></img>
                    <p className='ml-6'>{eventInfo.first_name} {eventInfo.last_name}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</div> */}





    </div>
  )
}

export default EventDetails
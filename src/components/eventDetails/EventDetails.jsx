import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
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
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  let navigate = useNavigate();
  
  useEffect(()=>{

    setLoading(true)
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
        
        setErrors(true)
        navigate('/error');
                
      })

     
      

    },2000);

  }, [])
  

 

 
  return (
    <div className='bg-bandme_dark'>


  
      
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
      province = {eventInfo.province}
    />
    } 

    



    







    </div>
  )
}

export default EventDetails
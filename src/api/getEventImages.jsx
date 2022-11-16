const backendImagesUrl = process.env.REACT_APP_IMAGES 
const backendProfileImagesUrl =  process.env.REACT_APP_IMAGES_PROFILE

export const getAllEventImages = async (data) =>{
    
    const returnedArray = []

    if(data.profile_photo.indexOf("uploads") === -1){
       //ep2
    }else{
        const fullProfileImageUrl = backendProfileImagesUrl.concat(data.profile_photo);
        returnedArray.push(fullProfileImageUrl)
    } 

    if(data.image_url.indexOf("uploads")  === -1){
        //ep2
    }else{      
        const fullEventImageUrl =  backendImagesUrl.concat(data.image_url);
        returnedArray.push(fullEventImageUrl)    
    }
    return [returnedArray];
}
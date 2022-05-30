import axios from 'axios'
import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import './ImageUpload.css'


const SectionImageUpload = (props) => {
    const [state, setstate] = useState({})
    const handleUpload = (e) => {
        let file = e.target.files[0];
        let formData = new FormData();
        formData.append("image", file);
        axios.post('/api/images', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).then((response) => {
            if(response.data.error === false){
                setstate({url: response.data.url});
                props.onUpload(response.data.url, props.index);
            }  
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className='upload'>
            <input type="file" onChange={handleUpload} accept ="image/*"/>
            {
                state.url? 
                <img src = {state.url} alt='img' />
                :
                <AiOutlinePlus className='plus' color='#125D98' size='50px' />
            }
            
        </div>
    )
}

export default SectionImageUpload
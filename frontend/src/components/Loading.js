import React from 'react';
import Typical from 'react-typical';
import '../css/Loading.css';

const Loading = () =>{
    return(
        <div><h5>
        <Typical
        loop={Infinity}
        wrapper='b'
        steps={['Loading...',250,
                'Hackathon 2020!',250,
                'Loading...',250,
                'Hackathon 2020!',250,
                'Loading...',250,
                'Hackathon 2020!',250
                ]}/>
    </h5></div>
    )
};
export default Loading;
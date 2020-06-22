import React from 'react';
import Typical from 'react-typical';

const Loading = () =>{
    return(
        <div><h1>
        <Typical
        loop={Infinity}
        wrapper='b'
        steps={['Loading',250,
                'Thank You for visiting! Hackathon 2020',250,
                'Loading ',250,
                'Thank You for vising! Hackathon 2020',250,
                'Loading',250,
                'Thank You for vising! Hackathon 2020',250
                ]}/>
    </h1></div>
    )
};
export default Loading;
import React from 'react';
import { Rings } from  'react-loader-spinner'
const Loading = () => {
    return (
        <div style={{minHeight:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Rings
    height="100"
    width="100"
    color='grey'
    ariaLabel='loading'
  />
        </div>
    );
};

export default Loading;
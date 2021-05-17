import React from 'react'

export default function Sprite({data, position}){
    //receive params
    const{x,y,w,h} = data
    // console.dir(position.x)
    // console.log(position.x)
    return (
        <div style={{
            position: 'absolute',
            top: `calc(${position.y})`,
            left: `calc(${position.x})`,
            height: `${h}px`,
            width: `${w}px`,
            backgroundImage: 'url(/img/test-player.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0 0'
        }}/>
    )
}
import React from 'react'
import Sprite from '../sprites'

export default function Actor({dir, step, position}){
    const h=24
    const w=24
    // console.log(position)
    return (
        <Sprite
            data={{
                x: step * w,
                y: dir * h,
                w,
                h
            }}
            position={position}
        />
    )
}
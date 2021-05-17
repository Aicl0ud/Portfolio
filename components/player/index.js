import React from 'react'
import Actor from '../actors'
import keyPress from '../../hooks/keyPress'
import Walking from '../../hooks/walking'

export default function Player({}){
    const {dir, step, walk, position}=Walking(4)

    //when walk
    keyPress((e) => {
        var test = e.key.replace("Arrow", "").toLowerCase()
        if(test=='w')test='up'
        if(test=='a')test='left'
        if(test=='s')test='down'
        if(test=='d')test='right'
        
        walk(test)
        e.preventDefault()
    })
    return <Actor dir={dir} step={step} position={position}/>
}
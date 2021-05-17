import {useState} from 'react'
//steps = 4
export default function Walking(steps){
    const [dir, setDir] = useState(0)
    const [step, setStep] = useState(0)
    const [position, setPos] = useState({x: '50%', y: '50%'});
    const direction = {
        down: 0,
        left: 1,
        right: 2,
        up: 3
    }

    const stepSize = '1%'

    // const modifier = {
    //     down:{x: 0, y: stepSize},
    //     left:{x: -stepSize, y: 0},
    //     right:{x: stepSize, y: 0},
    //     up:{x: 0, y: -stepSize},
    // }
    const modifier = {
        down:{x: 0, y: `${stepSize}`}, //Down++
        left:{x: `-${stepSize}`, y: 0}, //Left--
        right:{x: `${stepSize}`, y: 0}, //RIGHT++
        up:{x: 0, y: `-${stepSize}`}, //UP--
    }

    function walk(dir){
        //console.dir(dir)
        // console.log(direction[dir])
        //setDir(direction[dir])
        if(direction.hasOwnProperty(dir)){
            setDir((prev) => {
                if(direction[dir] === prev){
                    move(dir)
                    setStep((prev) => (prev < steps-1 ? prev + 1 : 0))
                }
                else setStep(0)
                return direction[dir]
            })
            
        }
        
    }

    function move(dir){
        setPos(prev => ({
            x: `${prev.x} + ${modifier[dir].x}`,
            y: `${prev.y} + ${modifier[dir].y}`,
        }))
    }
    console.log(position)
    return{dir, step, walk, position}
}
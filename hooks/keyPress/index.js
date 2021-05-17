import {useEffect} from 'react'

export default function keyPress(fn){
    useEffect(() => {
        window.addEventListener('keydown', fn)
        return () => window.removeEventListener('keydown', fn)
    }, [fn])
}
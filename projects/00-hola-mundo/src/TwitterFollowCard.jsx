import {useState} from 'react'

export function TwitterFollowCard ({children, userName, initialIsFollowing}) {

const [isFollowing, setIsFollowing] = useState(initialIsFollowing) // esto solo se inicializa una vez, no se reinicializa (grave error comun)
// =
/*
const state = useState(false)
const isFollowing = state[0] //primera posicion tenemos el valor del estado
const setIsFollowing = state[1] //segunda posicion una funcion que nos permite actualizar el estado, (interruptor de luz para encender la luz x ej)
*/
const imageSrc = `https://unavatar.io/twitter/${userName}`
const text = isFollowing ? 'Siguiendo' : 'Seguir'
const buttonClassName = isFollowing 
    ? 'tw-follow-Card-button is-following'
    : 'tw-follow-Card-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-follow-Card'    >
        <header className='tw-follow-Card-header'>
            <img 
            className='tw-follow-Card-avatar'
            alt="El avatar" 
            src= {imageSrc} />
            <div className='tw-follow-Card-info'>
                <strong>{children}</strong>
                <span className='tw-follow-Card-infoUserName'>@{userName}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                {text}
            </button>
        </aside>
      </article> 
    )
}
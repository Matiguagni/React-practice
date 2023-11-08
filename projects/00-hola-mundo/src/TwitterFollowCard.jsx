export function TwitterFollowCard ({children, userName, isFollowing}) {
const imageSrc = `https://unavatar.io/twitter/${userName}`
const text = isFollowing ? 'Siguiendo' : 'Seguir'
const buttonClassName = isFollowing 
    ? 'tw-follow-Card-button is-following'
    : 'tw-follow-Card-button'

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
            <button className={buttonClassName}>{text}</button>
        </aside>
      </article> 
    )
}
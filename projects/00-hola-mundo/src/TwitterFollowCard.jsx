export function TwitterFollowCard ({formatUserName, userName, name, isFollowing}) {
const imageSrc = `https://unavatar.io/twitter/${userName}`
   

    return (
        <article className='tw-follow-Card'    >

        <header className='tw-follow-Card-header'>

            <img 
            className='tw-follow-Card-avatar'
            alt="El avatar" 
            src= {imageSrc} />
            <div className='tw-follow-Card-info'>
                <strong>{name}</strong>
                <span className='tw-follow-Card-infoUserName'>{formatUserName(userName)}</span>
            </div>

        </header>

        <aside>
            <button className='tw-follow-Card-button'>Seguir</button>
        </aside>

      </article> 
    )
}
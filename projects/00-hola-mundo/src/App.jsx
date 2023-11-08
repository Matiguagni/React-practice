import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

/*const formatUserName = (userName) => `@${userName}` */

/*const formattedUserName = <span>@matiguagni11</span> */

    return (
        <section className='App'>
            <TwitterFollowCard 
              /*formatUserName={formattedUserName}*/ 
              isFollowing 
              userName="matiguagni11" 
              name="Matias Guagni"
              />
            
            <TwitterFollowCard 
              /*formatUserName={formattedUserName}*/ 
              isFollowing={false} 
              userName="piasancheez" 
              name="Pia Sanchez"
              /> 

        </section>
          
    )

}

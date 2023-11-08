import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

/*const formatUserName = (userName) => `@${userName}` */

/*const formattedUserName = <span>@matiguagni11</span> */


    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName="matiguagni11" name="Matias Guagni">
              Matias Guagni
             </TwitterFollowCard>
            
            <TwitterFollowCard isFollowing={false} userName="piasancheez" name="Pia Sanchez">
              Pia Sanchez
            </TwitterFollowCard>

        </section>
          
    )

}

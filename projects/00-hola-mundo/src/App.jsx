import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

/*const formatUserName = (userName) => `@${userName}` */

/*const formattedUserName = <span>@matiguagni11</span> */




    return (
        <section className='App'>
            <TwitterFollowCard userName="matiguagni11" initialIsFollowing={true}> 
              Matias Guagni
             </TwitterFollowCard>
            
            <TwitterFollowCard userName="piasancheez">
              Pia Sanchez
            </TwitterFollowCard>

            

        </section>
          
    )

}

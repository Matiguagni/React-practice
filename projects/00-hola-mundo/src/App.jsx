import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

/*const formatUserName = (userName) => `@${userName}` */

/*const formattedUserName = <span>@matiguagni11</span> */


const users = [
    {
        userName: 'matiguagni11',
        name: 'Matias Guagni',
        isFollowing: true
    },
    {
        userName: 'piasancheez',
        name: 'Pia Sanchez',
        isFollowing: false
    },
    {
        userName: 'pepe123',
        name: 'Pepe Reina',
        isFollowing: true
    },
    {
        userName: 'juanuti42',
        name: 'Juan Torres',
        isFollowing: false
    },
]

    return (
        <section className='App'>
            {
            users.map(user => {
                const{ userName, name, isFollowing} = user
                return (
                    <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}
                    >
                    {name}   {/* va aca porque es children */}     
                    </TwitterFollowCard>
                    )
                })
            }
        </section>
          
    )

}

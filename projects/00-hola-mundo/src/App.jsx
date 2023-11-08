import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
const formatUserName = (userName) => `@${userName}`

    return (
        <section className='App'>
        <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="matiguagni11" name="Matias Guagni"/>
        <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName="piasancheez" name="Pia Sanchez"/> 

        </section>
          
    )

}

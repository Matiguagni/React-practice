import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
        <TwitterFollowCard isFollowing userName="matiguagni11" name="Matias Guagni"/>
        <TwitterFollowCard isFollowing={false} userName="piasancheez" name="Pia Sanchez"/> 

        </section>
          
    )

}
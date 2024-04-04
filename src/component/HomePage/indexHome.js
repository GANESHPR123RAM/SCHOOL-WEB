import React from 'react'
import HomePage from './HomePage'
import './Index.css'
import Carausel from './Carausel'
import FacilitiesHome from './FacilitiesHome'
import Achievements from './Achievements'

function indexHome() {
    return (
        <>
            <HomePage />
            <FacilitiesHome/>
            <Achievements/>
            <Carausel />
        </>
    )
}

export default indexHome
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

function Contact() {
    return (
        <>
            <Header type="Single"/>

            <div>Contact <Link to="/"> Home</Link> </div>

        </>
    )
}

export default Contact
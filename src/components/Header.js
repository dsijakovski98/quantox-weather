import '../styles/component_styles/header/header.css'
import React from 'react'

function Header() {
    return (
        <header className="app-header">
            <div className="header-container">
                <h1>Q-Weather</h1>
                <p>Your daily breaf on the weather in your town!</p>
            </div>
        </header>
    )
}

export default Header

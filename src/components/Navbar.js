import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Button } from 'antd';
import axios from '../api'

function Navbar() {
    const checkAuth = useStoreActions(action => action.checkAuth)
    const auth = useStoreState(state => state.auth)
    const id = useStoreState(state => state.cv_id)
    const [loading, setloading] = useState(false)
    const logout = () => {
        setloading(true)
        axios.post('/logout').then(() => {
            checkAuth()
        })
    }
    useEffect(() => {
        checkAuth()
    }, [checkAuth])
    return (
        <header id="navbar">
            <Link exact to="/" id="logo"><h1>Cv Site</h1></Link>
            <ul className="nav-links">
                <li><NavLink exact to="/" className="nav-link">Home</NavLink></li>
                {
                    auth ? (
                        <>
                        <li><NavLink to="/create" className="nav-link">Edite Cv</NavLink></li>
                        <li><NavLink to={`/profile/${id}`} className="nav-link">Voir Cv</NavLink></li>
                        <li><Button type="primary" loading={loading} onClick={logout}>Log out</Button></li>
                        </>
                        
                        ): (
                        <>
                        <li><NavLink to="/login" className="nav-link">Login</NavLink></li>
                        <li><NavLink to="/signup" className="nav-link">Creer votre cv</NavLink></li>
                        </>
                    )
                }
            </ul>
        </header>
    )
}

export default Navbar

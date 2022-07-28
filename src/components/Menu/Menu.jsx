import React from 'react'
import { createRoot } from 'react-dom/client'
import './Menu.scss'
import {AiOutlinePlus, AiFillGithub, AiOutlineMenu} from 'react-icons/ai'
import Modal from '../Modal/Modal'
import logo from '../../assets/images/logo.png'

function Menu() {

    function addNew(){
        const container = document.querySelector("#modal-area")
        const root = createRoot(container)
        root.render(<Modal root={root}/>)
    }

    return (
        <div id="menu-container">

            <div className="menu-logo">
                <img src={logo} alt="Logo do OurPapers"/>
            </div>

            <AiOutlineMenu className="menu-icon"/>

            <div className="menu-items">

            </div>

            <div className="menu-buttons"> 

                <div className="buttons">
                    
                    <AiFillGithub className="button-icon"/>
                    <AiOutlinePlus className="button-icon" onClick={addNew}/>

                </div>

                <div id="menu-user">

                </div>

            </div>

        </div>
    )
}

export default Menu
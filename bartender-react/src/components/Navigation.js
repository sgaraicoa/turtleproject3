import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="logo-div">
                <img src="http://i.imgur.com/cih3ZpN.png" alt="logo" className="logo" />
            </div>
            <ul className="nav-list">
                <li>
                    <Link to='/' className="link">Home</Link>
                </li>
                <li>
                    <Link to='/recipes' className="link">Recipes</Link>
                </li>
                <li>
                    <Link to='/guide' className="link">Beginner's Guide to Bartending</Link>
                </li>
                <li>
                    <Link to='/interviews' className="link">Bartender Showcase</Link>
                </li>
                <li>
                    <Link to='/about' className="link">About Me</Link>
                </li>
            </ul>
        </div>
      )
}

export default Navigation;

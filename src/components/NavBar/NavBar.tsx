import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";

const NavBar: React.FC = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={"/LessonHello"} activeClassName={s.active}>Lesson Hello</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/LessonInter"} activeClassName={s.active}>Lesson Inter</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;
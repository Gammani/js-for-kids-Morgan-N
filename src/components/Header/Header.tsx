import React from 'react';
import s from './Header.module.css'

const Header: React.FC = () => {
    return (
        <nav className={s.header}>
            <div>Самоучитель по программированию Морган JS для детей</div>
        </nav>
    );
}

export default Header;
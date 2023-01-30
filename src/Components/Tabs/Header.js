import React from 'react'

const Header = ({ children }) => {
    return (
        <div className="tabHeader">
            {children}
        </div>
    );
};

export default Header
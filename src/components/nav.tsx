import React, { useState } from "react";

const Nav = () => {
    const [isActive, setIsActive] = React.useState(true)

    return (
        <div className="flex flex-col">
            <a className="nav-link-custom">About</a>
            <a className="nav-link-custom">Experience</a>
            <a className="nav-link-custom">Projects</a>
        </div>
    )
}

export default Nav
import { Anchor, Button, Box } from '@dracula/dracula-ui'
import { FiChevronDown } from 'react-icons/fi'
import React, { useState } from 'react'

export default function Navigation() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true)
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)

    return <Box color="blackSecondary" mx="sm" rounded="lg" mb="lg" px="sm">
    <nav className="navbar fixed-top navbar-expand-lg drac-box drac-bg-black-secondary drac-mx-sm drac-rounded-lg drac-mb-lg drac-px-sm">
        <div className="container-fluid">
            <Anchor href="/" className="navbar-brand" color="purpleCyan" hoverColor="pinkPurple">Ludoviko.xyz</Anchor>
            <Button variant="outline" color="purple" className="custom-toggler navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded={!isNavCollapsed ? true : false}
                aria-label="Toggle navigation"
                onClick={handleNavCollapse}>
                    <FiChevronDown className="drac-text-purple drac-text-pink--hover" />
            </Button>
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
                <div className="navbar-nav me-auto" id="nav-items">
                    <Anchor className="nav-item nav-link" color="purple" hoverColor="pink" href="/#about">About</Anchor>
                    <Anchor className="nav-item nav-link" color="purple" hoverColor="pink" href="/#projects">Projects</Anchor>
                    <Anchor className="nav-item nav-link" color="purple" hoverColor="pink" href="/#social">Social</Anchor>
                    <Anchor className="nav-item nav-link" color="purple" hoverColor="pink" href="/blog">Blog</Anchor>
                </div>
            </div>
        </div>
    </nav>
    </Box>
}
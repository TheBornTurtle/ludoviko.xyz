import { Anchor, Button, Box } from '@dracula/dracula-ui'

export default function Navigation() {
    return <Box color="blackSecondary" mx="sm" rounded="lg" mb="lg" px="sm">
    <nav className="navbar fixed-top navbar-expand-lg drac-box drac-bg-black-secondary drac-mx-sm drac-rounded-lg drac-mb-lg drac-px-sm">
        <Anchor href="/" className="navbar-brand" color="purpleCyan" hoverColor="pinkPurple">Ludoviko.xyz</Anchor>
        <Button className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
        </Button>
        <div className="collapse navbar-collapse" id="navbar-content">
            <div className="navbar-nav mr-auto" id="nav-items">
                <Anchor className="nav-item nav-link" color="purple" hoverColor="pink" href="#about">About</Anchor>
                <Anchor className="nav-item nav-link" color="purple" hoverColor="pink" href="#projects">Projects</Anchor>
                <Anchor className="nav-item nav-link" color="purple" hoverColor="pink" href="#social">Social</Anchor>
                <Anchor className="nav-item nav-link" color="purple" hoverColor="pink" href="/blog/">Blog</Anchor>
            </div>
        </div>
    </nav>
    </Box>
}
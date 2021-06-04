import { Anchor, Button } from '@dracula/dracula-ui'

export default function Navigation() {
    return <nav className="navbar fixed-top navbar-expand-lg drac-box drac-bg-black-secondary drac-mx-sm drac-rounded-lg drac-mb-sm">
        <Anchor href="/" className="navbar-brand" color="purpleCyan" hoverColor="pinkPurple">Ludoviko.xyz</Anchor>
        <Button className="navbar-toggler"
            type="button"
            dataToggle="collapse"
            dataTarget="#navbarSupportedContent"
            ariaControls="navbarSupportedContent"
            ariaExpanded="false"
            ariaLabel="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
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
}
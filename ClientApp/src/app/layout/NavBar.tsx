import React from "react";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";

interface Props {
    openForm: () => void;
}

export default function NavBar({openForm}: Props) {
    return (
        <Menu color='olive' inverted tabular secondary fixed="top">
            <Container>
                <Menu.Item header>
                    <img src="/images/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                    ReactAffiche
                </Menu.Item>
                <MenuItem 
                    name="Activities"
                />
                <MenuItem>
                    <Button onClick={openForm} positive content = 'Create Activity'/>
                </MenuItem>
            </Container>
        </Menu>
    )
}
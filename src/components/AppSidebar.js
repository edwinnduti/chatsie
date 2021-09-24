import {useContext} from 'react';
import {
    Sidebar,
    Avatar,
    Button,
    Nav,
    ResponsiveContext,
} from 'grommet';

import {
    Projects,
    HelpOption,
    Chat,
    ChatOption,
    Phone,
    SettingsOption,
    Camera,
} from 'grommet-icons';



export const AppSidebar = () => {
    const size = useContext(ResponsiveContext)

    return(
        <Sidebar background="brand" pad="small" direction='column' align="center" width={ size === 'small' ? '2%' : '10%'}
            header={
                <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
            }
            footer={
                <Button icon={<HelpOption />} hoverIndicator />
            }
        >
            <Nav gap="medium">
                <Button icon={<Projects />} hoverIndicator label="Home" />
                <Button icon={<Chat />} hoverIndicator label="Chats" />
                <Button icon={<ChatOption />} hoverIndicator label="Message" />
                <Button icon={<Phone />} hoverIndicator label="Calls" />
                <Button icon={<Camera />} hoverIndicator label="Camera" />
                <Button icon={<SettingsOption />} hoverIndicator label="Settings" />
            </Nav>
        </Sidebar>
    );
}
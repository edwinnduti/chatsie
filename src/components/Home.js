import {
    Card,
    CardBody,
    CardFooter,
    Button,
    TextArea,
    Box,
} from 'grommet';

import {
    Send,
    Close,
    Favorite,
    Redhat,
    Upload,
    ShareOption,
} from 'grommet-icons';



export const Home = () => {
    

    return(
        <Card  height="small" width="medium" background="light-5" pad="small" >
            {/* <CardHeader pad="small">{value}</CardHeader> */}
            
            <CardBody pad={{horizontal: "large"}} gap="medium" margin={{bottom:"medium", top:"medium"}} direction="row" background="brand" round>
                <Button
                    icon={<Favorite color="plain" />}
                    onClick={() => {}}
                    hoverIndicator
                />
                <Button
                    icon={<Redhat color="" />}
                    hoverIndicator
                />
                <Button
                    icon={<Close color="plain" />}
                    hoverIndicator
                />
                <Button
                    icon={<ShareOption color="plain" />}
                    hoverIndicator 
                />
            </CardBody>
            <CardFooter pad="small"  height="xxsmall" margin={{bottom:"medium"}} width="medium">
                <Box direction="row">
                    
                        <Button
                            icon={<Upload  />}
                            hoverIndicator 
                        />  
              
                        <TextArea
                            width="medium"
                            placeholder="type here"
                            
                        />
                    
                        <Button
                            icon={<Send color="black"  size='medium' />}
                            justify="end"
                            type="submit"
                            onClick={value => alert(value)}
                            hoverIndicator
                        />
                </Box>
            </CardFooter>
        </Card>
    );
}
import {
    Grid,
    Box,
    Grommet,
    grommet,
} from 'grommet';

import { Dashboard } from './Dashboard';
import { AppSidebar } from './AppSidebar';
import { Home } from './Home';


export const GridLayout = () => {
    return(
        <Grommet theme={grommet} full>
        <Grid fill rows={["auto", "flex", "auto"]}>
          <Box tag="header" background="brand" pad="small">
            <Dashboard />
          </Box>

          <Box direction="row" justify="left" background="light-2" >
              <AppSidebar />
                <Box overflow="auto" pad="medium" width="large">
                    <Home />
                </Box>
          </Box>
          
          <Box tag="footer" pad="small" background="dark-1">
            footer
          </Box>
        </Grid>
      </Grommet>
    );
}
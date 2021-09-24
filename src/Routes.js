import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { MainDash } from './pages/MainDash';

export const Routes = () => {
    return(
        <Switch>
            <Route basename={process.env.PUBLIC_URL} exact path="/" component={MainDash} />
            <Redirect exact from="/chatsie" to="/" />
        </Switch>
    );
}
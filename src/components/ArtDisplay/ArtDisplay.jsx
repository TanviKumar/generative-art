import React from 'react'
import BeyondBinary from './art-pieces/BeyondBinary/BeyondBinary';
import {BrowserRouter as  Route,Switch,useRouteMatch} from 'react-router-dom';
export default function ArtDisplay() {
    let match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.url}/beyond_binary`}>
            <BeyondBinary></BeyondBinary>
            </Route>
        </Switch>
    )
}

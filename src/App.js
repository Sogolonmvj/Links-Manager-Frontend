import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './screens/Home';
import LogIn from './screens/login';
import SignUp from './screens/signup';
import ManageLinks from './screens/Manage/Links';
import ManageLinksCreate from './screens/Manage/Links/Create';
import ManageLinksEdit from './screens/Manage/Links/Edit';

const App = () => {
    return (
        <BrowserRouter>
        <div>
            <nav>
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item"><Link to="/log-in">Log-In</Link> </li>
                    <li className="list-group-item"><Link to="/sign-up">Sign-Up</Link> </li>
                    <li className="list-group-item"><Link to="/manage/links/create">Create Link</Link> </li>
                    <li className="list-group-item"><Link to="/manage/links/edit">Edit Link</Link> </li>
                    <li className="list-group-item"><Link to="/manage/links">Links</Link> </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/log-in"><LogIn /></Route>
                <Route path="/sign-up"><SignUp /></Route>
                <Route path="/manage/links/create"><ManageLinksCreate /></Route>
                <Route path="/manage/links/edit"><ManageLinksEdit /></Route>
                <Route path="/manage/links"><ManageLinks /></Route>
                <Route path="/"><Home /></Route>
            </Switch>
        </div>
        </BrowserRouter>
    )
};

export default App;

import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Dialogs} from './сomponents/Dialogs/Dialogs';
import {Header} from './сomponents/Header/Header';
import {Navbar} from './сomponents/Navbar/Navbar';
import {Profile} from "./сomponents/Profile/Profile";
import {News} from "./сomponents/News/News";
import {Music} from "./сomponents/Music/Music";
import {Settings} from "./сomponents/Settings/Settings";
/*import {StoreType} from './redux/store';*/
import { reducersType } from './redux/redux-store';

type AppPropsType = {
    store: reducersType
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState();
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route
                    path='/profile'
                    render={() => <Profile
                        state={state}
                        dispatch={props.store.dispatch.bind(props.store)}
                    />}
                />
                <Route
                    path='/dialogs'
                    render={() => <Dialogs
                        state={state}
                        dispatch={props.store.dispatch.bind(props.store)}
                    />}
                />
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export {
    App
}

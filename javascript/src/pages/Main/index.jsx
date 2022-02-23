import React from 'react';

import Sidebar from "../../components/Sidebar";
import Player from "../../components/Player";

import { Provider } from "react-redux";
import store from "../../redux/store";

const Main = () => {
    return ( 
        <>
            <Provider store={store}>
                <Sidebar />
                <Player />
            </Provider>
        </>
     );
}
 
export default Main;
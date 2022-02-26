import React from 'react';
import { Provider } from "react-redux";

import Sidebar from "../../components/Sidebar";
import Player from "../../components/Player";

import store from "../../store";

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
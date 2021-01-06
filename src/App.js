import React, {useEffect, useState} from 'react';
import {View} from '@vkontakte/vkui'
import Main from "./components/main/Main";
import Basket from "./components/basket/Basket";
import Cash from "./components/cash/Cash";
import CoffeeShop from "./components/coffeshop/CoffeeShop";
import Editing from "./components/editing/Editing";
import Profile from "./components/profile/Profile";
import bridge from '@vkontakte/vk-bridge';
import './spinner.css';

const PANELS = {
    MAIN: 'MAIN',
    COFFEESHOP: 'COFFEESHOP',
    BASKET: 'BASKET',
    EDITING: 'EDITING',
    PROFILE: 'PROFILE',
    CASH: 'CASH'
}

const App = () => {
    const [panel, setPanel] = useState(PANELS.COFFEESHOP);
    const [user, setUser] = useState(null);
    const [popout, setPopout] = useState(
        <div className="lds-css">
            <div className="lds-double-ring">
                <div></div>
                <div></div>
            </div>
        </div>
    );

    useEffect(() => {
        async function fetchData() {
            const user = await bridge.send('VKWebAppGetUserInfo');
            setUser(user);
            setPopout(null);
        }
        fetchData();
    }, []);

    const go = e => {
        setPanel(e.currentTarget.dataset.to);
    };

    return (
        <View activePanel={panel} popout={popout}>
            <Main id={PANELS.MAIN} user={user} go={go}/>
            <CoffeeShop id={PANELS.COFFEESHOP} go={go}/>
            <Basket id={PANELS.BASKET} go={go}/>
            <Editing id={PANELS.EDITING} go={go}/>
            <Profile id={PANELS.PROFILE} go={go}/>
            <Cash id={PANELS.CASH} go={go}/>
        </View>
    )
}
export default App;

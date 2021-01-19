import React, {useEffect, useState} from 'react';
import {View} from '@vkontakte/vkui'
import Main from "./components/1main/Main";
import Basket from "./components/3basket/Basket";
import Cash from "./components/6cash/Cash";
import CoffeeShop from "./components/2coffeshop/CoffeeShop";
import Editing from "./components/4editing/Editing";
import Profile from "./components/5profile/Profile";
import bridge from '@vkontakte/vk-bridge';
import './spinner.css';

const PANELS = {
    MAIN: 'MAIN',
    COFFEESHOP: 'COFFEESHOP',
    BASKET: 'BASKET',
    EDITING: 'EDITING',
    PROFILE: 'PROFILE',
    CASH: 'CASH',
    ORDER: 'ORDER'
}

const App = () => {
    const [panel, setPanel] = useState(PANELS.COFFEESHOP);
    const [user, setUser] = useState(null);
    const [places, setPlaces] = useState([]);
    const [popout, setPopout] = useState(
        <div className="lds-css">
            <div className="lds-double-ring">
                <div></div>
                <div></div>
            </div>
        </div>
    );
    const [tempCoffeeShop, setTempCoffeeShop] = useState({id: 0, name: 'gustogram', img: 'gust.jpg'});

    useEffect(() => {
        async function fetchData() {
            const user = await bridge.send('VKWebAppGetUserInfo');
            setUser(user);
            setPopout(null);
        }

        setPlaces(getRestData());
        fetchData();
    }, []);

    const getRestData = () => {
        // get data from server
        // plug below
        return [
            {id: 0, name: 'gustogram', img: 'gust.jpg'},
            {id: 1, name: 'coffeebon', img: 'coffeebon.jpg'},
            {id: 2, name: 'surf', img: 'surf.jpg'}
        ];
    }

    // const onCoffeeShopClick = e => {
    //     setTempCoffeeShop(e.currentTarget);
    // }
    //
    const go = e => {
        setPanel(e.currentTarget.dataset.to);
    };

    return (
        <View activePanel={panel} popout={popout}>
            <Main id={PANELS.MAIN} user={user} go={go} places={places}/>
            <CoffeeShop id={PANELS.COFFEESHOP} activeShop={tempCoffeeShop} go={go}/>
            <Basket id={PANELS.BASKET} go={go}/>
            <Editing id={PANELS.EDITING} go={go}/>
            <Profile id={PANELS.PROFILE} go={go}/>
            <Cash id={PANELS.CASH} go={go}/>
            {/*<Order id={PANELS.ORDER} go={go}/>*/}
        </View>
    )
}
export default App;

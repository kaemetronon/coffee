import React, {useEffect, useState} from 'react';
import {Panel, Root, View} from '@vkontakte/vkui'
import Basket from "./components/4basket/Basket";
import bridge from '@vkontakte/vk-bridge';
import './spinner.css';
import Map from "./components/1map/Map";
import CoffeeShopsList from "./components/2list/CoffeeShopsList";
import CoffeeShop from "./components/3coffeshop/CoffeeShop";

const PANELS = {
    MAP: 'MAP',
    COFFEEHOUSES: 'COFFEEHOUSES',
    COFFEESHOP: 'COFFEESHOP',

    BASKET: 'BASKET',
    EDITING: 'EDITING',
    PROFILE: 'PROFILE',
    CASH: 'CASH',
    ORDER: 'ORDER',
    EXPERIMENT: 'EXPERIMENT'
}

const App = () => {
    const [panel, setPanel] = useState(PANELS.BASKET);
    const [user, setUser] = useState(null);
    const [places, setPlaces] = useState([]);
    const [popout, setPopout] = useState(
        <div className="lds-css">
            <div className="lds-double-ring">
                <div/>
                <div/>
            </div>
        </div>
    );

    // скорее всего эти вещи нужно будет переместить в дочерние компоненты
    const [activeShop, setActiveShop] = useState(null);
    const [shopList, setShopList] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const user = await bridge.send('VKWebAppGetUserInfo');
            setUser(user);
            setPopout(null);
        }

        async function getRestData() {
            // будто достаю данные с бэка
            setPlaces([
                {id: 0, name: 'gustogram', img: 'gust.jpg'},
                {id: 1, name: 'coffeebon', img: 'coffeebon.jpg'},
                {id: 2, name: 'surf', img: 'surf.jpg'}
            ]);
        }

        getRestData();
        fetchData();

        // это для того, чтобы страница шопа отображалась, потом удалить
        setActiveShop({id: 4, name: 'gustogram', img: 'gust.jpg'});

        // это для того, чтобы корзина отображалась, потом удалить
        setShopList([
            {id: 4, name: 'моча', count: 14, miniImg: 'minimotcha.jpg'},
            {id: 8, name: 'latte', count: 99, miniImg: 'latte.jpg'}
        ]);
    }, []);

    // const onCoffeeShopClick = e => {
    //     setTempCoffeeShop(e.currentTarget);
    // }
    //
    const go = e => {
        setPanel(e.currentTarget.dataset.to);
    };

    return (
        <Root activeView='main-panel'>
            <View id='main-panel' activePanel={panel} popout={popout}>
                <Panel id={PANELS.MAP}>
                    <Map/>
                </Panel>
                <Panel id={PANELS.COFFEEHOUSES}>
                    <CoffeeShopsList places={places}/>
                </Panel>
                <Panel id={PANELS.COFFEESHOP}>
                    <CoffeeShop activeShop={activeShop}/>
                </Panel>
                <Panel id={PANELS.BASKET}>
                    <Basket shoppingList={shopList} activeShop={activeShop}/>
                </Panel>
            </View>
        </Root>
    )
    // return (
    //     <View activePanel={panel} popout={popout}>
    //         <Map id={PANELS.MAP} />
    //         <CoffeeShopsList />
    //         {/*<CoffeeShop id={PANELS.COFFEESHOP} activeShop={tempCoffeeShop} go={go}/>*/}
    //         {/*<Basket id={PANELS.BASKET} go={go}/>*/}
    //         {/*<Editing id={PANELS.EDITING} go={go}/>*/}
    //         {/*<Profile id={PANELS.PROFILE} go={go}/>*/}
    //         {/*<Cash id={PANELS.CASH} go={go}/>*/}
    //         {/*<Experiment id={PANELS.EXPERIMENT} go={go}/>*/}
    //         {/*<Order id={PANELS.ORDER} go={go}/>*/}
    //     </View>
    // )
}
export default App;

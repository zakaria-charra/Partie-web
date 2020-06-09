import React, { Component } from 'react'
import Menu from './Menu'
import Header from './Header'
import Hotels from './Components/Hotels'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Restaurants from './Components/Restaurants';
import Footer from './Footer';
import Activite from './Components/Activite';
import Destination from './Components/Destination';
import HotelListe from './Components/HotelListe';
import RestaurantList from './Components/RestaurantList';
import ActiviteList from './Components/ActiviteList';
import DestinationList from './Components/DestinationList';
import Home from './Components/Home';
import ListTourists from './Components/ListTourists';
import DestinationEdit from './Components/DestinationEdit';
import ActiviteEdit from './Components/Activite Edit';
import HotelsEdit from './Components/HotelsEdit';
import RestaurantsEdit from './Components/RestaurantsEdit';
import ListFabricants from './Components/ListFabricants';
import ListProduits from './Components/ListProduits';

export default class App extends Component {
  render() {
    return (
      
      <Router>
      <div>
        <Header/>
        <Menu/>
        <div className="content-wrapper backApp">     
        <Switch>

        <Route path="/hotels"> <Hotels/></Route>
        <Route path="/resto"> <Restaurants/></Route>
        <Route path="/activite"> <Activite/></Route>
        <Route path="/dest"> <Destination/></Route>
        <Route path="/ListHotels"> <HotelListe/></Route>
        <Route path="/ListResto"> <RestaurantList/></Route>
        <Route path="/ListActivite"> <ActiviteList/></Route>
        <Route path="/DestList"> <DestinationList/></Route>
        <Route path="/touristList"> <ListTourists/></Route>
        <Route path="/fabList"> <ListFabricants/></Route>
        <Route path="/ProduitList"> <ListProduits/></Route>
        <Route path="/detailDest" component={DestinationEdit} />
        <Route path="/detailActivite" component={ActiviteEdit} />
        <Route path="/detailHotels" component={HotelsEdit} />
        <Route path="/detailResto" component={RestaurantsEdit} />




        <Route path="/"> <Home/></Route>


        
        </Switch>


        
        </div>
        <Footer/>
      </div>
      </Router>
    )
  }
}


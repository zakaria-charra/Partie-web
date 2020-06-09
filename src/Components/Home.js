import React, { Component } from 'react'
import firebase from 'firebase'


export default class Home extends Component {

    state={
        nbHotel:0,
        nbActivite:0,
        nbResto:0,
        nbDest:0,
        nbProduit:0,
        nbTourist:0,
        nbFabricant:0



    }

    componentDidMount(){
        firebase.database() 
        .ref("services") 
        .child('Activities')
        .once("value")
        .then(snapShot=>{
            this.setState({
                nbActivite:snapShot.numChildren()
            })
        })
        //*******************************/
        firebase.database() 
        .ref("services") 
        .child('Detinations')
        .once("value")
        .then(snapShot=>{
            this.setState({
                nbDest:snapShot.numChildren()
            })
        })
        //*******************************/      
        firebase.database() 
        .ref("services") 
        .child('Hotels')
        .once("value")
        .then(snapShot=>{
            this.setState({
                nbHotel:snapShot.numChildren()
            })
        })
        //*******************************/     
         firebase.database() 
        .ref("services") 
        .child('Restaurants')
        .once("value")
        .then(snapShot=>{
            this.setState({
                nbResto:snapShot.numChildren()
            })
        })
    
        //*******************************/     
         firebase.database() 
        .ref("produits") 
        .once("value")
        .then(snapShot=>{
            this.setState({
                nbProduit:snapShot.numChildren()
            })
        })
        //*******************************/
          firebase.database() 
          .ref("Fabricant_Traditionnel") 
          .once("value")
          .then(snapShot=>{
              this.setState({
                  nbFabricant:snapShot.numChildren()
              })
          })
            //*******************************/     
         firebase.database() 
         .ref("Tourists") 
         .once("value")
         .then(snapShot=>{
             this.setState({
                 nbTourist:snapShot.numChildren()
             })
         })
     

    }
    render() {
        return (
            <div className="container"> 
            <br/><br/><br/> <br/><br/>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-lg-6 col-6 ">
                        <div className="small-box bg-info">
                        <div className="inner">
                            <h3>{this.state.nbDest}</h3>
                            <p>Destinations</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-location" />
                        </div>
                        <a href="/DestList" className="small-box-footer">Plus d'info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-6">
                        <div className="small-box bg-success">
                        <div className="inner">
                            <h3>{this.state.nbProduit}</h3>
                            <p>Produits traditionnels</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-social-buffer" />
                        </div>
                        <a href="/ProduitList" className="small-box-footer">Plus d'info  <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                    </div>
                 
                    </div>
                 
                    </div>
        </section>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-lg-4 col-6">
                        <div className="small-box back4">
                        <div className="inner">
                            <h3>{this.state.nbHotel}</h3>
                            <p>Hotels</p>
                        </div>
                        <div className="icon">
                        <i className="nav-icon fas fa-bed" />
                                                </div>
                        <a href="/ListHotels" className="small-box-footer">Plus d'info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-6">
                        <div className="small-box bg-danger">
                        <div className="inner">
                            <h3>{this.state.nbResto}</h3>
                            <p>Restaurants</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-coffee" />
                        </div>
                        <a href="/ListResto" className="small-box-footer">Plus d'info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-6">
                        <div className="small-box bg-warning">
                        <div className="inner">
                            <h3>{this.state.nbActivite}</h3>
                            <p>Activités</p>
                        </div>
                        <div className="icon">
                        <i className="nav-icon fas fa-calendar" />
                        </div>
                        <a href="/ListActivite" className="small-box-footer">Plus d'info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                    </div>
               
                    </div>
                 
                    </div>
        </section>
        <section className="content">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-lg-6 col-6 ">
                        <div className="small-box back5">
                        <div className="inner">
                            <h3>{this.state.nbTourist}</h3>
                            <p>Tourists</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-person-add" />
                        </div>
                        <a href="/touristList" className="small-box-footer">Plus d'info <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-6">
                        <div className="small-box back6">
                        <div className="inner">
                            <h3>{this.state.nbFabricant}</h3>
                            <p>Fabricants traditionnels</p>
                        </div>
                        <div className="icon">
                            <i className="nav-icon fa fa-trademark"  />
                        </div>
                        <a href="/fabList" className="small-box-footer">Plus d'info  <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                    </div>
                 
                    </div>
                 
                    </div>
        </section>


            </div>
        )
    }
}

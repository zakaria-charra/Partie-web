import React, { Component } from 'react'
import '../config'
import firebase from 'firebase'
import '../mycss.css'
import { Link } from 'react-router-dom'
export default class DestinationList extends Component {
    
state={

    data:[],
    list:[]

}

onFilter=(e)=>{
    const list=this.state.list
    var val=e.target.value
    this.setState({
      data:list.filter(row=>row.nom.includes(val)||row.adresse.includes(val))
      
    })

}
componentDidMount(){
    const tab=[];
     firebase.database() 
     .ref("services") 
     .child('Detinations')
     .once("value")
     .then(snapShot=>{
         let tab=[];
         snapShot.forEach(item=>{ 
             tab.push({
                 id:item.key,
                 nom:item.val().nom,
                 adresse:item.val().adresse,
                 description:item.val().description,
                 photo:item.val().photo
             });
         })

         this.setState({data:tab,list:tab})
     })
 
    
 }

    render() {
        return (
            <div>
            <div className="jumbotron  text-center">
            <h1>Liste des Destinations</h1>
           </div> 
           <div className="container">         
                <div className="row">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-header">
                      <form className="form-inline ml-3 float-right">
                            <div className="input-group input-group-sm">
                              <input className="form-control form-control-navbar " onChange={this.onFilter} placeholder="Search" aria-label="Search" />
                              <div className="input-group-append">
                                <div>
                                  <i className="fas fa-search ml-2" />
                                </div>
                              </div>
                            </div>
                      </form>
                      </div>
                      <div className="card-body">
                        <table id="example2" className="table table-bordered table-hover">
                          <thead>
                            <tr>
                              <th className="withTh">Photo</th>
                              <th>Nom</th>
                              <th>Adresse</th>
                              <th>Details</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.data.map(row=>
                            
                            <tr>
                              <td><img src={row.photo[0]} className="imgS"/></td>
                              <td>{row.nom}</td>
                              <td>{row.adresse} </td>
                              <td><Link to={{
                                pathname:'/detailDest' ,
                                state:{data:row}
                                }}>  Details>></Link></td>
                            </tr>)}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

      </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import '../config'
import firebase from 'firebase'
import '../mycss.css'
import { Link } from 'react-router-dom'


export default class ActiviteList extends Component {
    state={

        data:[],
        list:[]
    
    }
    
    onFilter=(e)=>{
        const list=this.state.list
        var val=e.target.value
        this.setState({
          data:list.filter(row=>row.nom.includes(val)||row.adresse.includes(val)||row.tele.includes(val)||row.fax.includes(val)||row.prix.includes(val))
          
        })
    
    }
    componentDidMount(){
        const tab=[];
         firebase.database() 
         .ref("services") 
         .child('Activities')
         .once("value")
         .then(snapShot=>{
             let tab=[];
             snapShot.forEach(item=>{ 
                 tab.push({
                     id:item.key,
                     type:item.val().type,
                     nom:item.val().nom,
                     adresse:item.val().adresse,
                     tele:item.val().tel,
                     Debut :item.val().debut,
                     fin:item.val().fin,
                     email:item.val().email,
                     description:item.val().description,
                     photo:item.val().photo
                 });
             })
    
             this.setState({data:tab,list:tab})
         })
     
        
     console.log(this.state.data)
     }
    render() {
        return (
            <div>
            <div className="jumbotron  text-center">
            <h1>Liste des Activités</h1>
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
                              <th>Type</th>
                              <th>Nom</th>
                              <th>Adresse</th>
                              <th>Tele</th>
                              <th>Date de Debut</th>
                              <th>Date de Fin</th>
                              <th>Details</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.data.map(row=>
                            <tr>
                              <td><img src={row.photo[0]} className="imgS"/></td>
                              <td>{row.type}</td>
                              <td>{row.nom}</td>
                              <td>{row.adresse} </td>
                              <td>{row.tele}</td> 
                              <td> {row.Debut}</td>
                              <td>{row.fin}</td>
                              <td><Link to={{
                                pathname:'/detailActivite',
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

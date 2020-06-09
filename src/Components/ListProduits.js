import React, { Component } from 'react'
import '../config'
import firebase from 'firebase'
import '../mycss.css'
export default class ListProduits extends Component {
    
state={

    data:[],
    list:[]

}


onFilter=(e)=>{
    const list=this.state.list
    var val=e.target.value
    this.setState({
      data:list.filter(row=>row.nom.includes(val)||row.prix.includes(val)||row.vendeur.includes(val)||row.date.includes(val))
      
    })

}
componentDidMount(){
    const tab=[];
     firebase.database() 
     .ref("produits") 
     .once("value")
     .then(snapShot=>{
         let tab=[];
         snapShot.forEach(item=>{ 
             tab.push({
                 id:item.key,
                 nom:item.val().nom,
                 prix:item.val().prix,
                 adresse:item.val().adresse,
                 photo:item.val().photo,
                 date:item.val().date,
                 description:item.val().description,
                 vendeur:item.val().vendeur,
                 quantite:item.val().quantite
             });
         })

         this.setState({data:tab,list:tab})
     })
 
    
 }
 delete(id){
  firebase.database().ref("Tourists").child(id).remove().then(() => {
    console.log("Document successfully deleted!");
    this.setState({
      data:this.state.data.filter(row=>row.id!==id)
      
    })
  }).catch((error) => {
    console.error("Error removing document: ", error);
  });
}
    render() {
        return (
            <div>
            <div className="jumbotron  text-center">
            <h1>Liste des Produits traditionnels</h1>
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
                              <th>Photo</th>
                              <th>Nom</th>
                              <th>Adresse</th>
                              <th>Vendeur</th>
                              <th>Pix</th>
                              <th>Date</th>
                              <th>quantite</th>

                            </tr>
                          </thead>
                          <tbody>
                            {this.state.data.map(row=>
                            <tr>
                              <td><img src={row.photo[0]} className="imgS"/></td>
                              <td>{row.nom}</td>
                              <td>{row.adresse}</td>
                              <td>{row.vendeur}</td>
                              <td>{row.prix} DH</td>
                              <td>{row.date} </td>
                              <td>{row.quantite} </td>
                              <td onClick={this.delete.bind(this,row.id)}><a className="btn text-danger" ><i class="fa fa-trash-alt" aria-hidden="true"> </i></a></td>
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

import React, { Component } from 'react'
import '../config'
import firebase from 'firebase'
import '../mycss.css'
export default class ListTourists extends Component {
    
state={

    data:[],
    list:[]

}


onFilter=(e)=>{
    const list=this.state.list
    var val=e.target.value
    this.setState({
      data:list.filter(row=>row.nom.startsWith(val)||row.pays.startsWith(val)||row.prenom.startsWith(val)||row.email.startsWith(val))
      
    })

}
componentDidMount(){
    const tab=[];
     firebase.database() 
     .ref("Tourists") 
     .once("value")
     .then(snapShot=>{
         let tab=[];
         snapShot.forEach(item=>{ 
             tab.push({
                 id:item.key,
                 nom:item.val().nom,
                 prenom:item.val().prenom,
                 email:item.val().email,
                 pays:item.val().pays
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
            <h1>Liste des Tourists</h1>
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
                              <th>ID</th>
                              <th>Nom</th>
                              <th>Prenom</th>
                              <th>Email</th>
                              <th>Pays</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.data.map(row=>
                            <tr>
                              <td>{row.id}</td>
                              <td>{row.nom}</td>
                              <td>{row.prenom}</td>
                              <td>{row.email}</td>
                              <td>{row.pays} </td>
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

import React, { Component } from 'react'
import '../config';
import firebase from 'firebase'
import '../mycss.css'

export default class Destination extends Component {
  state={
    progress:0,
    id:'',
    nom:'',
    adresse:'',
    description:'',
    photo:[],
    photoTab:[]
  }
  onChangeNom=(e)=>{ this.setState({nom :e.target.value})}
  onChangeAddress=(e)=>{ this.setState({adresse :e.target.value})}
  onChangeDesc=(e)=>{ this.setState({description :e.target.value})}
  onChangeph3=(e)=>{ this.setState({photoTab :e.target.files}) }

  onUpload = (e) =>{ 
    var tab=[];
    for(let i=0;i<this.state.photoTab.length;i++){
      const uploadTask=firebase.storage().ref(`Destinations images`).child(this.state.photoTab[i].name).put(this.state.photoTab[i]);
      uploadTask.on('state_changed',
      (snapshot)=>{
        const progress=Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*50+i);
        this.setState({progress})
      },
      (error)=>{ console.log(error)},
      (complete)=>{ 
        const progress=100;
        this.setState({progress})
        firebase.storage().ref(`Destinations images`).child(this.state.photoTab[i].name).getDownloadURL().then(url=>{
          tab[i]=url
        })

      }
  
  );} 
  if(tab.length>0){
    this.setState({photo:["./noimage.png"]})}
   this.setState({photo:tab})

this.setState({id:`${this.state.nom}ID${new Date().getMilliseconds()}`})

}
onSubmit = (e) =>{
 
  e.preventDefault()
 
  this.setState({id:`${this.state.nom}ID${new Date().getMilliseconds()}`})
  const {id,nom, adresse,description, photo}=this.state
  firebase.database() 
    .ref("services") 
    .child('Detinations')
    .child(this.state.id)
    .set({
        id,
        nom,
        adresse,
        description,
        photo
    }).then((data)=>{
      document.getElementById("alertS").classList.remove("hidden")
      document.getElementById("Nom").value=''
      document.getElementById("Adresse").value=''
      document.getElementById("Description").value=''
      document.getElementById("ph3").value=''
      document.getElementById("prog").value=''




    }).catch((error)=>{
      document.getElementById("alertF").classList.remove("hidden")


    });

  
}

    render() {
        return (
            <div className="path">
        
            <div className="jumbotron backdest text-center">
             <h1>Gestion des Destinations</h1>
            </div>
          <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
         <form className="form-horizontal company " role="form" id="comp" onSubmit={this.onSubmit}>
         <div className="alert alert-success hidden"  id="alertS">
             <strong>Success!</strong> Distination ajouté avec success
        </div>
        <div className="alert alert-danger hidden"  id="alertF">
             <strong>Non</strong> error de sauvegarde
        </div>

    <div className="row ">      
         <div className="form-group " >
           <label className="col-sm-2 control-label">Nom</label>
           <div className="col-xs-6">
             <input type="text" className="form-control" id="Nom"  placeholder="Nom" onChange={this.onChangeNom} required/>
           </div>
         </div>
         <div className="form-group">
           <label  className="col-sm-2 control-label">Adresse</label>
           <div className="col-xs-6">
             <input type="text" className="form-control" id="Adresse"  placeholder="Adresse"  onChange={this.onChangeAddress} required/>
           </div>
         </div>
   </div>  
     <div className="row">
         <div className="form-group">
           <label  className="col-sm-2 control-label">Description</label>
           <div className="area">
           <textarea  className="form-control" id="Description"  placeholder="Description" onChange={this.onChangeDesc} required/>
           </div>
         </div>
      
         
     </div>
     <label className="col-sm-2 control-label">Photos</label>
     <div className="row">
           <div className="form-group">
              <div className="col-xs-2">
              <input type="file" className="form-control" id="ph3" multiple={true} onChange={this.onChangeph3}  required/></div>
            </div>
            <div>
            <button type="button" className="btn btn-info btn-xs" onClick={this.onUpload}>upload</button>
            </div>
            <div>
            <progress className="progress progress-xs " id="prog" value={this.state.progress} max="100"/>
            </div> 
       </div>  
 
      <div className="row">
          
          
               <button type="submit" class="btn btn-success btn-block">Save</button>
 
    </div>
 </form>
 <br/>
 
 </div>
 
          </div>
        </div>
        )
    }
}

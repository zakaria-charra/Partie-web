import React, { Component } from 'react'
import '../config';
import firebase from 'firebase'
import '../mycss.css'

export default class HotelsEdit extends Component {

    state={
        progress:0,
        id:this.props.location.state.data.id,
        nom:this.props.location.state.data.nom,
        adresse:this.props.location.state.data.adresse,
        tel:this.props.location.state.data.tele,
        fax:this.props.location.state.data.fax,
        chambres:this.props.location.state.data.chambres,
        prix:this.props.location.state.data.prix,
        description:this.props.location.state.data.description,
        photo:this.props.location.state.data.photo,
        photoTab:[]
      }

      onChangeNom=(e)=>{ this.setState({nom :e.target.value})}
      onChangeAddress=(e)=>{ this.setState({adresse :e.target.value})}
      onChangeDesc=(e)=>{ this.setState({description :e.target.value})}
      onChangeChambre=(e)=>{ this.setState({chambres :e.target.value})}
      onChangePrix=(e)=>{ this.setState({prix :e.target.value})}
      onChangeTel=(e)=>{ this.setState({tel :e.target.value})}
      onChangeFax=(e)=>{ this.setState({fax :e.target.value})}
      onChangeph3=(e)=>{ this.setState({photoTab :e.target.files}) }

      onUpload = (e) =>{ 
        var tab=[];
        for(let i=0;i<this.state.photoTab.length;i++){
          const uploadTask=firebase.storage().ref(`Hotels images`).child(this.state.photoTab[i].name).put(this.state.photoTab[i]);
          uploadTask.on('state_changed',
          (snapshot)=>{
            const progress=Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*50+i);
            this.setState({progress})
          },
          (error)=>{ console.log(error)},
          (complete)=>{ 
            const progress=100;
            this.setState({progress})
            firebase.storage().ref(`Hotels images`).child(this.state.photoTab[i].name).getDownloadURL().then(url=>{
              tab[i]=url
            })

          }
      
      );} 
      if(tab.length>0){
        this.setState({photo:["./noimage.png"]}) 
         }
         this.setState({photo:tab})

  }



      onSubmit = (e) =>{
 
        e.preventDefault()
        const {id,nom, adresse, tel, fax , chambres, prix, description, photo}=this.state
        firebase.database() 
          .ref("services") 
          .child('Hotels')
          .child(this.state.id)
          .update({
              id,
              nom,
              adresse,
              tel,
              fax ,
              chambres,
              prix,
              description,
              photo
          }).then((data)=>{
            document.getElementById("alertS").classList.remove("hidden")
            document.getElementById("prog").value=''
          }).catch((error)=>{
            document.getElementById("alertF").classList.remove("hidden")
          });
      }

      delete(id){
        firebase.database().ref("services").child("Hotels").child(id).remove().then(() => {
          console.log(" successfully deleted!");
          document.getElementById("alertS").classList.remove("hidden")
          document.getElementById("imgs").style.display='none'
          document.getElementById("Nom").value=''
            document.getElementById("Adresse").value=''
            document.getElementById("Tel").value=''
            document.getElementById("Fax").value=''
            document.getElementById("Prix").value=''
            document.getElementById("chamber").value=''
            document.getElementById("Description").value=''
            document.getElementById("ph3").value=''
            document.getElementById("prog").value=''
          document.getElementById("success").innerHTML="Supprimé"
    
       
        }).catch((error) => {
          console.error("Error removing ", error);
          document.getElementById("alertF").classList.remove("hidden")
          document.getElementById("fl").innerHTML="Error"
    
    
        });
      }
    render() {
        return (
       <div className="path"> 
           <div className="jumbotron  text-center">
            <h1>Gestion des Hotels</h1>
           </div>
           <div className="row "  id="imgs" style={{marginLeft:"28%"}}>
          {this.props.location.state.data.photo.map(img=>
            <img src={img}  className="imgSx"/>
            )}
       </div>
         <div className="container">
         <div className="row h-100 justify-content-center align-items-center">
        <form className="form-horizontal company " role="form" id="comp" onSubmit={this.onSubmit}>

        <div className="alert alert-success hidden"  id="alertS">
             <strong>Success!</strong> <h6 id="success"> Hotel modifié avec success</h6>
        </div>
        <div className="alert alert-danger hidden"  id="alertF">
             <strong>Non</strong> <h6 id="fl"> Erreur</h6>
        </div>

   <div className="row ">      
        <div className="form-group " >
          <label className="col-sm-2 control-label">Nom</label>
          <div className="col-xs-6">
            <input type="text" className="form-control" id="Nom"  placeholder="Nom" onChange={this.onChangeNom} value={this.state.nom} required/>
          </div>
        </div>
        <div className="form-group">
          <label  className="col-sm-2 control-label">Adresse</label>
          <div className="col-xs-6">
            <input type="text" className="form-control" id="Adresse"  placeholder="Adresse" onChange={this.onChangeAddress} value={this.state.adresse} required />
          </div>
        </div>
  </div> 
  <div className="row"> 
        <div className="form-group">
          <label  className="col-sm-6 control-label">chambres</label>
          <div className="col-xs-6">
            <input type="number" className="form-control" id="chamber"  placeholder="Nombre des chambres" onChange={this.onChangeChambre} value={this.state.chambres} required/>
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Tel</label>
          <div className="col-xs-6">
            <input type="tel" className="form-control" id="Tel" pattern="^\+212 [0-9]{3}-[0-9]{6}" placeholder="+888 888 888888" onChange={this.onChangeTel} value={this.state.tel} required />
          </div>
        </div>
     </div>
   <div className="row">  
       
        <div className="form-group">
          <label className="col-sm-2 control-label">Prix</label>
          <div className="col-xs-6">
            <input type="number" className="form-control" id="Prix"  placeholder="Prix" onChange={this.onChangePrix} value={this.state.prix} />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Fax</label>
          <div className="col-xs-6">
            <input type="tel"  pattern="^\+212 [0-9]{3}-[0-9]{6}" className="form-control" id="Fax"  placeholder="+888 888 888888" onChange={this.onChangeFax} value={this.state.fax} required/>
          </div>
        </div>
    </div> 
    <div className="row">
        <div className="form-group">
          <label  className="col-sm-2 control-label">Description</label>
          <div className="area">
          <textarea  className="form-control" id="Description"  placeholder="Description" onChange={this.onChangeDesc} value={this.state.description} required/>
          </div>
        </div>
    </div> 
    <label className="col-sm-2 control-label">Photos</label>
    <div className="row">
           <div className="form-group">
              <div className="col-xs-2">
              <input type="file" className="form-control" id="ph3" multiple={true} onChange={this.onChangeph3}  accept="image/*"  /></div>
            </div>
            <div>
            <button type="button" className="btn btn-info btn-xs" onClick={this.onUpload}>upload</button>
            </div>
            <div>
            <progress className="progress progress-xs " id="prog" value={this.state.progress} max="100"/>
            </div> 
       </div>  
  


       <div className="row mt-3">
          
          <button type="submit" class="btn btn-primary  btn-block" style={{marginRight:"55px"}}>Modifier</button>
        </div>
        <div className="row mt-3">
        <button type="button" onClick={this.delete.bind(this,this.props.location.state.data.id)} class="btn btn-danger btn-block " style={{marginRight:"55px"}}>Supprimer</button>
        </div>

</form>
<br/>

</div>

         </div>
       </div>
 

        )
    }
}

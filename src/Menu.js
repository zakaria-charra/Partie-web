import React, { Component } from 'react'
import './mycss.css'

export default class Menu extends Component {
    render() {
        return (
           <div>
  <aside className="main-sidebar sidebar-light-primary back2 elevation-4">
    {/* Brand Logo */}
    <a href="/" className="brand-link">
      <img src="dist/img/log.PNG" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-bold">Admin Page</span> 
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="dist/img/admin.png" className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
        <b> Zakaria Charra</b>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        


          <li className="nav-item has-treeview">
            <a href="/hotels" className="nav-link">
              <i className="nav-icon fas fa-bed" />
              <p>
                Hotel
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="/hotels" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Nouveau Hotel</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/ListHotels" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Liste des Hotels</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fa fa-coffee" />
              <p>
                Restaurant
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="/resto" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Nouveau Restaurant</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/ListResto" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Liste des Restaurantes</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-calendar" />
              <p>
                Activité
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="/activite" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Nouveau  Activité</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/ListActivite" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Liste des  Activités</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-tree" />
              <p>
                Destination
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="/dest" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Nouveau  Destination</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/DestList" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Liste des  Destinations</p>
                </a>
              </li>
            </ul>
          </li>
          
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fa fa-product-hunt" />
              <p>
                Produit 
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="/ProduitList" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Liste des produits</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fa fa-users" />
              <p>
                Users
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
             
              <li className="nav-item">
                <a href="/touristList" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Liste des  Tourists</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/fabList" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Liste des Fabricants Traditionnels</p>
                </a>
              </li>
            </ul>
          </li>





        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

        )
    }
}

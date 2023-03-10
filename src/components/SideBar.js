import React from 'react';
import image from '../assets/images/logo-JopoStore.png';
import {Link} from 'react-router-dom';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Logo JopoStore"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Inicio</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                {/* <div className="sidebar-heading">Actions</div> */}

                {/*<!-- Nav Item - Categories -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/categorias">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Categorias</span>
                </Link>
                </li>

                {/*<!-- Nav Item - LastProduct -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/ultimoProducto">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Último producto</span></Link>
                </li>

                {/*<!-- Nav Item - Totals -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/totales">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Totales</span></Link>
                </li>

                 {/*<!-- Nav Item - Products List -->*/}
                 <li className="nav-item nav-link">
                <Link className="nav-link" to="/listaDeProductos">
                        <i className="fa-solid fa-list"></i>
                        <span>Lista de productos</span></Link>
                </li>

                {/*<!-- Nav Item - Search -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/buscador">
                <i className="fa-solid fa-magnifying-glass"></i>
                        <span>Buscador</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}


   
        </React.Fragment>
    )
}
export default SideBar;
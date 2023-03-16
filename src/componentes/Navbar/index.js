import './Navbar.css';

function Navbar(){
    return(
        <div className="container">
            <nav>
            <ul>
                <li><a href="/">Propriedade</a></li>
                <li><a href="/Produtores">Produtor</a></li>
                <li><a href="/Monitoramentos">Monitoramento</a></li>
                <li><a href="/Vinculos">Vinculo</a></li>
            </ul>
            </nav>
        </div>
    );
}

export default Navbar;
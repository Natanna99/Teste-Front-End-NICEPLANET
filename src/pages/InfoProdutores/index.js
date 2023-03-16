import {useNavigate} from 'react-router-dom';

const InfoProdutores = (props) => {
    //Tabela de Produtores
    let listaProdutores = Object.keys(props.td || {}).map(i => {return props.td[i]});

    //variavel auxiliar para o uso da função de navegação entre as paginas
    var irPara = useNavigate();

    return(
        <div>
            <h3 className="descricao">Registro de Produtores: </h3>
            <table border="1">
                <tr>
                    <th>Nome do Produtor</th>
                    <th>CPF do Produtor</th>
                    <th>Opções</th>
                </tr>
                {/* Percorre a lista com todos os registros de Produtores e exibe na tabela*/}
                {listaProdutores.map(produtor => {
                    return <>
                        <tr>
                            <td>{produtor.nomeProdutor}</td>
                            <td>{produtor.cpfProdutor}</td>
                            <td>
                                {/* botão que redireciona para a pagina de mais detalhes do produtores */}
                                <button className='detalhes' onClick={() =>
                                    irPara("/Produtores/"+produtor.idprodutor)
                                }>Mais informações</button>
                            </td>
                        </tr>
                    </>  
                })}
            </table>
        </div>
    );
}

export default InfoProdutores;
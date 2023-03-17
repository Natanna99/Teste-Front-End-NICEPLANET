import {useNavigate} from 'react-router-dom';

const InfoPropriedades = (props) => {
    //Tabela de Propriedades
    var listaPropriedades = Object.keys(props.td || {}).map(i => {return props.td[i]});

    //variavel auxiliar para navegação entre as paginas
    const irPara = useNavigate();

    return (
        <div>
            <h3 className="descricao">Registro de Propriedades:</h3>
            <table border="1">
                <tr>
                    <th>Nome da Propriedade</th>
                    <th>Numero de Cadastro Rural</th>
                    <th>Opções</th>
                </tr>
                 {/* Percorre a lista com todos os registros de Propriedades e exibe na tabela*/}
                {listaPropriedades.map(item => {
                    return <>
                        <tr>
                            <td> {item.nomePropriedade} </td>
                            <td> {item.numeroCadastroRural} </td>
                            <td>
                                {/* botão que redireciona para a pagina de mais detalhes do propriedade */}
                                <button className='detalhes' onClick={() =>
                                    irPara("/"+item.idPropriedade)
                                }>Mais informações</button></td>
                        </tr>
                    </>
                })}    
            </table>
        </div>
    );
}
export default InfoPropriedades;
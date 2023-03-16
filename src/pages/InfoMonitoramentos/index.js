import {useNavigate} from 'react-router-dom';
import BotaoComprar from './botaoComprar';

const InfoMonitoramentos = (props) => {
    //Tabela de Monitoramentos
    let listaMonitoramentos = Object.keys(props.td || {}).map(i => {return props.td[i]});

    //variavel auxiliar para o uso da função de navegação entre as paginas
    var irPara = useNavigate();

    return (
        <div>
            <h3 className="descricao">Registro de Monitoramentos: </h3>
            <table border="1">
                <tr>
                    <th>Data de Monitoramento</th>
                    <th>Analista</th>
                    <th>Resultado</th>
                    <th>Opções</th>
                </tr>
                {/* Percorre a lista com todos os monitoramentos registrado e exibe células da tabela*/}
                {listaMonitoramentos.map(item => {
                    return <>
                        <tr>
                            <td> {item.dataMonitoramento} </td>
                            <td> {item.analista} </td>
                            <td><div className='organizar-botao'> {item.resultado} <BotaoComprar button={item.resultado}/></div> </td>
                            <td>
                                {/* botão que redireciona para a pagina de mais detalhes do monitoramento */}
                                <button className='detalhes' onClick={() => 
                                    irPara("/Monitoramentos/"+item.idMonitoramento)
                                }>Mais informações</button>
                            </td>
                        </tr>
                    </>
                })}

               
            </table>
        </div>
    );
}

export default InfoMonitoramentos
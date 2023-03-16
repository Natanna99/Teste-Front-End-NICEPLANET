import { useParams } from 'react-router-dom';


// Componente da pagina de mais informações sobre os Monitoramentos
const AdicionalMonitoramento = (props) => {
    // Buscar o ID que esta vindo da URL
    const {id} =useParams();

    // Lista das tabelas de monitoramento, vinculos e produtores
    var listaMonitoramentos = Object.keys(props.td.monitoramentos || {}).map(i => {return props.td.monitoramentos[i]});
    let listaVinculos = Object.keys(props.td.vinculo || {}).map(i => {return props.td.vinculo[i]});
    let listaProdutores = Object.keys(props.td.produtores || {}).map(i => {return props.td.produtores[i]});

    return(
        <div>
            <h3>Informações detalhadas sobre o parecer do moitoramento:</h3>
            {/* Trecho do codigo que percorre as 3 lista */}
            {listaMonitoramentos.map(monitoramento=>{
                // Verificar se o ID do item selecionado pelo usuario 
                // é correspondente a algum ID da tabelas Monitoramento 
                if(id === monitoramento.idMonitoramento){
                    return<>
                        {listaVinculos.map(vinculo=>{
                            // Verificar se o ID da tabela Vinculo, corresponde 
                            // ao idVinculo existente na tabela Monitoramento
                            if(monitoramento.idVinculo===vinculo.idVinculo){
                                return<>
                                    {listaProdutores.map(produtor=>{
                                        // Verificar se o ID da tabela Produtor, corresponde 
                                        // ao idProdutor existente na tabela Produtor
                                        if(vinculo.idProdutor=== produtor.idprodutor){
                                            return<>
                                            {/* Retorna as informações do nome do produtor, tipo de viculo
                                            e o parecer do monitoramento selecionado */}
                                                <div className='adicional'>
                                                    <div className='adicional-nome'>Nome do produtor: {produtor.nomeProdutor}</div>
                                                    <div className='adicional-tipo'>Tipo de vinculo: {vinculo.tipoVinculoProdutor}</div>
                                                    <div className='adicional-parecer'> <h4>Descrição do parecer:</h4> {monitoramento.parecerAnalise}</div>
                                                </div>
                                            </>
                                        }
                                    })}
                                </>
                            }
                        })}
                    </>
                }
            })}
        </div>
    );
}

export default AdicionalMonitoramento;
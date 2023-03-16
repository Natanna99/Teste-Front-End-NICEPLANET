const InfoVinculos = (props) => {
     //Tabelas de Vinculos e Produtores
    let listaVinculos = Object.keys(props.td.vinculo || {}).map(i => {return props.td.vinculo[i]});
    let listaProdutores = Object.keys(props.td.produtores || {}).map(i => {return props.td.produtores[i]});

    return(
        <div>
        <h3 className="descricao">Registro de Viculos:</h3>
        <table border="1">
            <tr>
                <th>Produtor</th>
                <th>Tipos de Vinculos do Produtor</th>
            </tr>
            {listaVinculos.map(vinculo=>{
                return <>
                    {listaProdutores.map(produtor=>{
                        // Verificar se o ID da tabela Produtor, corresponde 
                        // ao idProdutor existente na tabela Produtor
                        if(vinculo.idProdutor===produtor.idprodutor){
                            return <>
                                <tr>
                                    {/* Retorna as informações do nome do produtor, tipo de viculo*/}
                                    <td>{produtor.nomeProdutor}</td>
                                    <td>{vinculo.tipoVinculoProdutor}</td>
                                </tr>
                            </>
                        }
                    })}
                </>
            })}
            
        </table>
    </div>
    );
}

export default InfoVinculos;
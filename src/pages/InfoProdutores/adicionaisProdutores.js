import { useParams } from 'react-router-dom';

// Componente da pagina de mais informações sobre os Produtores
const AdicionalProdutores = (props) => {
    // Buscar o ID que esta vindo da URL
    const {id} =useParams();
    
    // Lista da tabelas de Produtores
    var listaProdutores = Object.keys(props.td || {}).map(i => {return props.td[i]});

    return(
        <div>
            <h3>Informações detalhadas sobre o produtor:</h3>
            {listaProdutores.map(produtor => {
                // Verificar se o ID do item selecionado pelo usuario 
                // é correspondente a algum ID da tabelas Produtores
                if(id === produtor.idprodutor){
                    return <>
                        {/* Retorna as informações de ID, nome e CPF do produtor selecionado*/}
                        <div className='adicional'>
                            <div className='adicional-id'>Id do produtor: {produtor.idprodutor}</div>
                            <div className='adicional-nome'>Nome do produtor: {produtor.nomeProdutor}</div>
                            <div className='adicional-cpf'>CPF do produtor: {produtor.cpfProdutor}</div>
                        </div>
                    </>
                }
            })}
        </div>
    );
}

export default AdicionalProdutores;
import { useParams } from 'react-router-dom';

// Componente da pagina de mais informações sobre os Propriedades
const AdicionalPropriedade = (props) => {
    // Buscar o ID que esta vindo da URL
    const {id} =useParams();

    // Lista da tabelas de Propriedades
    var listaPropriedades = Object.keys(props.td || {}).map(i => {return props.td[i]});

    return(
        <div>
            <h3>Informações detalhadas sobre a propriedade:</h3>
            {listaPropriedades.map(propriedade => {
                // Verificar se o ID do item selecionado pelo usuario 
                // é correspondente a algum ID da tabelas Propriedades
                if(id === propriedade.idPropriedade){
                    return <>
                        {/* Retorna as informações de ID, nome e tipo da propriedade selecionada*/}
                        <div className='adicional'>
                            <div className='adicional-id'>Id da propriedade: {propriedade.idPropriedade}</div>
                            <div className='adicional-nome'>Nome da propriedade: {propriedade.nomePropriedade}</div>
                            <div className='adicional-tipo'>Tipo de propriedade: {propriedade.tipoPropriedade}</div>
                        </div>
                    </>
                }
            })}
        </div>
    );
}

export default AdicionalPropriedade;
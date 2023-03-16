import { useState } from "react";

// Componente do botão de compra, com base na tabela de Monitoramento 
const BotaoComprar = (props) => {
    const [valor, SetValor] = useState(false);

    // Realiza a verificação se o resultado do Monitoramento 
    // é Liberado, para permitir a liberação do botao de compra
    if(props.button=="Liberado"){
        return(
            <>
                {/* Mudar o botão de compra para a tag informando
                que o monitoramento foi comercializado */}
                {valor ? (
                    <span className="comprado">Comercializado</span>
                ) : (
                    <button className="comprar" onClick={()=>{
                        SetValor(true);
                    }}>Comprar</button>
                )}
            </>
        );
    }
}

export default BotaoComprar;
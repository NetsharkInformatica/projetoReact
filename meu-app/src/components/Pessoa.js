function Pessoa({nome,idade,profissao,foto}){
    return(
        <div>
            <h2>Nome:{nome}</h2>
            <p>idade:{idade}</p>
            <p>profissao:{profissao}</p>
            <img src={foto} alt={nome}/>

        </div>
    )
    
}

export default Pessoa
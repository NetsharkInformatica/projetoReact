function RendLista({itens}){
    return(
    
        <>
        <h3>
            Lista de lFrameworks</h3>
            {
                itens.length >0 ?(
                    itens.map((item,index)=>(
                        <p key={index}>{item}</p>
                    ))
                ):
                (<p>nao ha itens na lista</p>)

            }
        
        </>
   
    )
}

export default RendLista

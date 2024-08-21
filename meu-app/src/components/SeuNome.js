function SeuNome({setNome}){
    return(
        <div>
            <p>digite o seu nome</p>
            <input 
            type="text"
             placehoder="qual é o seu nome?"
             onChange={(e)=>setNome(e.target.value)}
             />
             
        </div>

    )
}
export default SeuNome
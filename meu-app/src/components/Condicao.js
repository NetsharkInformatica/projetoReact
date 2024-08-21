import {useState} from 'react'

function Condicao(){

    const [email,setEmail]=useState()
    const[userEmail,setUserEmail]= useState()

    function enviarEmail(e){

            

        e.preventDefault()
        //alert('testando')
        setUserEmail(email)
        alert(`voce cadastrou o email ${email}`)
    }

    function limparEmail(){

          setUserEmail('')
    }

    return(
        <div>
            <h2>Cadastre o seu email</h2>
            <form>
                <label htmlFor='email'> Email  </label>
                <input type="email"
                 placeholder="insira um email" 
                  onChange={(e)=> setEmail(e.target.value)}
                   />

                <button type="submit" onClick={enviarEmail}>enviar email</button>
                {userEmail && (
                    <div>
                        o email do usuario é {userEmail}
                        <button onClick={limparEmail}>limpaemail</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicao
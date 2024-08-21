import { useState } from "react"

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault()
    alert(`o usuario ${name} foi cadastrado com a senha ${senha}`)
   
  }

  const [name, setName] = useState()
  const[senha,setPassword]= useState()
  return (
    <div>
      <h1>Preencha o formulário</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor='name'>Nome:</label>
          <input
            id='nome'
            name='name'
            type='text'
            placeholder='nome'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='senha'>senha</label>
          <input
           id='senha'
            name='senha'
             type='password'
             onChange={(e)=>setPassword(e.target.value)}
              />
        </div>
        <input type='submit' value='cadastrar' />
      </form>
    </div>
  )
}

export default Form

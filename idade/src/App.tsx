import { useState } from 'react'
import './App.css'
function App() {

  const [idade, setIdade] = useState(0)
  const [nome, setNome] = useState('')
  const [calculo, setCalculo] = useState(0)
  
  function calcularIdade(){
    if(idade === 0){
      alert('Digite um número maior que zero')
    }else{
      
    const calcular = 2024 - idade
    setCalculo(calcular)
    }
  } 

  return (
    <div className="container">

      <h1>Descubra sua idade</h1>
      <form className="formulario">
        <label>Digite seu nome</label>
        <input value={nome} placeholder="Digite seu nome..." onChange={(element) => setNome(element.target.value)}/>
        <label>Digite o ano que nasceu</label>
        <input value={idade} placeholder="Digite o ano que nasceu..." onChange={(element) => setIdade(Number(element.target.value))}/>
      </form>
    <button onClick={calcularIdade}> Descobrir idade
    </button>
    <div className='idade-resultado'>
        {calculo !== 0 && <p> Sua idade é: {calculo} anos, {nome}</p>}
    </div>
    </div>
  )
}
export default App

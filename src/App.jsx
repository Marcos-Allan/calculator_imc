import { useState } from 'react'

function App() {

  const [peso, setPeso] = useState("")
  const [altura, setAltura] = useState("")
  
  const [errorPeso, setErrorPeso] = useState(false)
  const [errorAltura, setErrorAltura] = useState(false)
  
  const [resultado, setResultado] = useState()
  const [calculado, setCalculado] = useState(false)

  const [nivelIMC, setNivelIMC] = useState('')

  function calculate(e){
    e.preventDefault()

    if(peso == "" && altura == ""){
      setErrorPeso(true)
      setErrorAltura(true)
      return
    }else if(peso == ""){
      setErrorPeso(true)
      return
    }else if(altura == ''){
      setErrorAltura(true)
      return
    }

    setCalculado(true)

    setErrorPeso(false)
    setErrorAltura(false)

    const imc = Number(peso / (altura * altura)).toFixed(2)

    setResultado(imc)
    if(imc >= 30){
      setNivelIMC('obesidade')
    }else if(imc >= 25 && imc <= 29.99){
      setNivelIMC('sobre peso')
    }else if(imc >= 18.5 && imc <= 24.99){
      setNivelIMC('normal')
    }else{
      setNivelIMC('baixo peso')
    }
    
    setAltura('')
    setPeso('')
  }

  return (
    <div className="w-screen h-screen overflow-hidden flex justify-start items-center flex-col">
      <div className='w-full h-full max-w-[800px] flex flex-col justify-center items-center sm:flex-row pt-[30px] sm:justify-center sm:items-center'>
        
        <div className='flex flex-col items-center justify-start w-full'>
          <h1 className="text-my-secondary text-[30px] font-extralight mb-6">Calculadora de IMC</h1>
          <form className="flex flex-col justify-start items-center w-[80%]" onSubmit={(e) => calculate(e)}>
            <input
              type="number"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              placeholder="Insira seu peso (kg)"
              className={`
                w-full outline-none border-[1px] rounded-[6px] ps-2 py-3 text-[20px] focus:border-my-secondary transition-all duration-[.2s] font-extralight
                ${errorPeso == true && 'border-[#dd5757]'}
                ${peso != "" && 'border-my-secondary'}
                ${errorPeso == false && peso == "" && 'border-[#d5d5d5]'}
                ${errorPeso == true ? 'mb-[2px]' : 'mb-[-10px]'}
              `}
            />
            <p className={`${errorPeso == true ? 'opacity-1' : 'opacity-0'} w-full text-[#dd5757] mb-3 ps-2 font-semibold`}>Insira seu peso</p>
            
            <input
              type="number"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              placeholder="Insira sua altura (m)"
              className={`
                w-full outline-none border-[1px] rounded-[6px] ps-2 py-3 text-[20px] focus:border-my-secondary transition-all duration-[.2s] font-extralight
                ${errorAltura == true && 'border-[#dd5757]'}
                ${altura != "" && 'border-my-secondary'}
                ${errorAltura == false && altura == "" && 'border-[#d5d5d5]'}
                ${errorAltura == true ? 'mb-[2px]' : 'mb-[-10px]'}
                `}
            />
            <p className={`${errorAltura == true ? 'opacity-1' : 'opacity-0'} w-full text-[#dd5757] mb-3 ps-2 font-semibold`}>Insira sua altura</p>
            
            <input
              type="submit"
              value="calcular"
              className="w-full border-[1px] border-transparent outline-none font-extralight rounded-[6px] cursor-pointer transition-all duration-[.4s] bg-my-secondary py-3 uppercase text-[20px] text-my-quintenary focus:text-my-secondary focus:border-my-secondary focus:bg-transparent hover:text-my-secondary hover:border-my-secondary hover:bg-transparent"
            />
          </form>
        </div>

        <div className='flex flex-col items-center justify-start w-full sm:mt-[60px]'> 
          <div className={`w-[80%] flex flex-row justify-between items-center mt-3 gap-2`}>
            
            <div className='flex flex-col justify-center items-center flex-grow-[1]'>
              <div
                className={`
                  w-full h-[30px] bg-red-600 transition-all duration-[.3s]
                  ${calculado == true && nivelIMC != "obesidade" && 'opacity-[0.5]'}
                `}
              ></div> {/* MAIOR QUE 30 OBESIDADE*/}
            </div>
            
            <div className='flex flex-col justify-center items-center flex-grow-[1]'>
              <div
                className={`
                  w-full h-[30px] bg-orange-600 transition-all duration-[.3s]
                  ${calculado == true && nivelIMC != "sobre peso" && 'opacity-[0.5]'}
                `}
              ></div> {/* DE 25 Á 29,99 SOBREPESO*/}
            </div>

            <div className='flex flex-col justify-center items-center flex-grow-[1]'>
              <div
                className={`
                  w-full h-[30px] bg-green-600 transition-all duration-[.3s]
                  ${calculado == true && nivelIMC != "normal" && 'opacity-[0.5]'}
                `}
              ></div> {/* DE 18,5 Á 24,99 NORMAL*/}
            </div>

            <div className='flex flex-col justify-center items-center flex-grow-[1]'>
              <div
                className={`
                  w-full h-[30px] bg-yellow-400 transition-all duration-[.3s]
                  ${calculado == true && nivelIMC != "baixo peso" && 'opacity-[0.5]'}
                `}
              ></div> {/* MENOR QUE 18,5 BAIXO PESO*/}
            </div>

          </div>
          
          <div
            className={`
              w-[80%]  h-[300px] mt-6 flex flex-col items-center justify-start text-[20px] transition-all duration-[.2s] sm:flex-grow-[1]
              ${calculado == true ? 'opacity-1' : 'opacity-0'}
            `}
          >
            <p>Você está: <span className='font-extrabold text-my-secondary uppercase'>{nivelIMC}</span></p>
            <p>seu nível de IMC é de:</p>
            <p className='text-[60px] font-extrabold text-my-secondary mt-3'>{resultado}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App

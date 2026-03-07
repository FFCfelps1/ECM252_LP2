import './style.css'

const App = () => {

  const esilosBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', width: '100%', borderRadius: 8, borderStyle: 'hidden', color: 'white', fontSize: 'medium'}

  const textoDoRotulo = 'Nome:'

  const obterTextoDoBotao = () => 'Enviar'
  const aoClicar = () => alert('Clicou')

  return <div style={{margin: 'auto', width: 576, backgroundColor: '#eee', padding: 12, borderRadius: 8}}>
    <label className="rotulo" htmlFor="campoNome" style={{display: 'block', marginBottom: 8}}>
      {textoDoRotulo}
    </label>
    {/*input#campoNome*/}
    <input type="text" id="campoNome" style={{paddingTop: 8, paddingBottom: 8, width: '100%', borderStyle: 'hidden', outline: 'none', borderRadius: 8}}/>

    {/*button{enviar}*/}
    <button
     onClick={() => aoClicar()}
     style={esilosBotao}>
      {obterTextoDoBotao()}
    </button>
  </div>
}

export default App
import { useState, useEffect } from 'react'
import axios from 'axios'

// Importing your components
import CardPersonagem from './Components/CardPersonagem'
import ListaFeiticos from './Components/ListaFeiticos'
import Lugares from './Components/Lugares'
import DetalhesPersonagem from './Components/DetalhesPersonagem'

function App() {
    const [personagens, setPersonagens] = useState([])
    const [feiticos, setFeiticos] = useState([])
    const [busca, setBusca] = useState('')
    const [abaAtual, setAbaAtual] = useState('characters')
    const [personagemSelecionado, setPersonagemSelecionado] = useState(null)

    useEffect(() => {
        // Fetch characters with images
        axios.get('https://hp-api.onrender.com/api/characters')
            .then(res => {
                const comFoto = res.data.filter(p => p.image !== "")
                setPersonagens(comFoto)
            })

        // Fetch spells
        axios.get('https://hp-api.onrender.com/api/spells')
            .then(res => setFeiticos(res.data))
    }, [])

    // Search logic
    const personagensFiltrados = personagens.filter(p =>
        p.name.toLowerCase().includes(busca.toLowerCase())
    )
    const feiticosFiltrados = feiticos.filter(f =>
        f.name.toLowerCase().includes(busca.toLowerCase())
    )

    return (
        <div style={{ padding: '30px', backgroundColor: '#1a1a1a', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>
            <h1 style={{ textAlign: 'center', color: '#ffdb00' }}>⚡ Hogwarts Explorer 🧙‍♂️</h1>

            {/* Navigation Menu - Only shows if no character is selected */}
            {!personagemSelecionado && (
                <>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '30px', flexWrap: 'wrap' }}>
                        <button onClick={() => { setAbaAtual('characters'); setBusca(''); }} style={btnEstilo(abaAtual === 'characters')}>Characters</button>
                        <button onClick={() => { setAbaAtual('spells'); setBusca(''); }} style={btnEstilo(abaAtual === 'spells')}>Spells</button>
                        <button onClick={() => { setAbaAtual('locations'); setBusca(''); }} style={btnEstilo(abaAtual === 'locations')}>Locations</button>
                    </div>

                    {abaAtual !== 'locations' && (
                        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                            <input
                                type="text"
                                placeholder={`Search ${abaAtual}...`}
                                value={busca}
                                onChange={(e) => setBusca(e.target.value)}
                                style={{ padding: '12px 20px', borderRadius: '25px', width: '300px', border: '2px solid #ffdb00', outline: 'none', backgroundColor: '#333', color: 'white' }}
                            />
                        </div>
                    )}
                </>
            )}

            {/* Display Logic */}
            {personagemSelecionado ? (
                <DetalhesPersonagem
                    personagem={personagemSelecionado}
                    aoVoltar={() => setPersonagemSelecionado(null)}
                />
            ) : (
                <>
                    {abaAtual === 'characters' && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                            {personagensFiltrados.map(p => (
                                <CardPersonagem
                                    key={p.id}
                                    p={p}
                                    aoSelecionar={setPersonagemSelecionado}
                                />
                            ))}
                        </div>
                    )}

                    {abaAtual === 'spells' && <ListaFeiticos feiticos={feiticosFiltrados} />}

                    {abaAtual === 'locations' && <Lugares />}
                </>
            )}
        </div>
    )
}

// Function to handle button styles
const btnEstilo = (ativo) => ({
    padding: '10px 20px',
    borderRadius: '20px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: ativo ? '#ffdb00' : '#444',
    color: ativo ? '#000' : '#fff',
    fontWeight: 'bold',
    transition: '0.3s'
})

export default App
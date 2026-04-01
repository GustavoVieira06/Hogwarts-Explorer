export default function CardPersonagem({ p, aoSelecionar }) {
    // Mapeamento de fotos personalizadas para os cards
    const fotosCustomizadas = {
        "Harry Potter": "/imagens/Harry.png",
        "Severus Snape": "/imagens/Snap.jpg",
        "Mrs Norris": "/imagens/Norris.png", 
      
        // "Hermione Granger": "/imagens/hermione.jpg"
    };

    // Define qual imagem usar: a customizada ou a da API
    const imagemExibida = fotosCustomizadas[p.name] || p.image;

    const corCasa = p.house === 'Gryffindor' ? '#ae0001' :
        p.house === 'Slytherin' ? '#1a472a' :
            p.house === 'Hufflepuff' ? '#ecb939' :
                p.house === 'Ravenclaw' ? '#0e1a40' : '#333';

    return (
        <div style={{
            border: `2px solid ${corCasa}`,
            padding: '15px',
            borderRadius: '15px',
            textAlign: 'center',
            backgroundColor: '#252525',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <div>
                <img
                    src={imagemExibida}  
                    alt={p.name}
                    style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '10px' }}
                />
                <h3 style={{ color: '#ffdb00', marginTop: '15px', fontSize: '18px' }}>{p.name}</h3>
                <p style={{ color: corCasa, fontWeight: 'bold', margin: '5px 0' }}>{p.house || 'No House'}</p>
            </div>

            <button
                onClick={() => aoSelecionar(p)}
                style={{
                    marginTop: '15px',
                    padding: '10px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    border: 'none',
                    backgroundColor: '#ffdb00',
                    color: '#000',
                    fontWeight: 'bold',
                    transition: '0.3s'
                }}
            >
                View Details
            </button>
        </div>
    );
}
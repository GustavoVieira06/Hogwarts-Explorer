export default function ListaFeiticos({ feiticos }) {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {feiticos.map((f, index) => (
                <div key={index} style={{ border: '1px solid #ffdb00', padding: '20px', borderRadius: '15px', backgroundColor: '#252525', textAlign: 'center' }}>
                    <h3 style={{ color: '#ffdb00', marginBottom: '10px' }}>{f.name}</h3>
                    <p style={{ fontStyle: 'italic', color: '#ccc' }}>{f.description}</p>
                </div>
            ))}
        </div>
    );
}
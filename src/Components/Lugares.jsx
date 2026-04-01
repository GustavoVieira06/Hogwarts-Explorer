const hogwartsLocations = [
    {
        name: "Great Hall",
        desc: "Where banquets and the Sorting Ceremony take place.",
        funFact: "The ceiling is bewitched to look like the sky outside.",
        img: "/imagens/grandesalao.jpg"
    },
    {
        name: "Quidditch Pitch",
        desc: "The venue for exciting broomstick matches.",
        funFact: "There are 700 ways to commit a foul in Quidditch.",
        img: "/imagens/quadribol.jpg"
    },
    {
        name: "Forbidden Forest",
        desc: "Home to magical creatures and dark mysteries.",
        funFact: "Aragog, the acromantula, lived deep within this forest.",
        img: "/imagens/florestaproibida.jpg"
    }
];

export default function Lugares() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {hogwartsLocations.map((location, i) => (
                <div key={i} style={{ borderRadius: '15px', overflow: 'hidden', backgroundColor: '#252525', border: '1px solid #444', transition: '0.3s' }}>
                    <img
                        src={location.img}
                        alt={location.name}
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200?text=Hidden+Magical+Image' }}
                        style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                    />
                    <div style={{ padding: '15px' }}>
                        <h3 style={{ color: '#ffdb00', margin: '0 0 10px 0' }}>{location.name}</h3>
                        <p style={{ fontSize: '14px', marginBottom: '10px' }}>{location.desc}</p>
                        <div style={{ backgroundColor: '#1a1a1a', padding: '10px', borderRadius: '8px', borderLeft: '3px solid #ffdb00' }}>
                            <small style={{ color: '#ffdb00', fontWeight: 'bold' }}>💡 Fun Fact:</small>
                            <p style={{ margin: '5px 0 0', fontSize: '13px', fontStyle: 'italic' }}>{location.funFact}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default function DetalhesPersonagem({ personagem, aoVoltar }) {
    const extraInfo = {
        "Harry Potter": {
            wand: "Holly, 11\", phoenix feather core",
            patronus: "Stag",
            funFact: "Survived the Killing Curse twice.",
            fotoLocal: "/imagens/Harry.png" // Foto personalizada para Harry
        },
        "Hermione Granger": {
            wand: "Vine, 10 3/4\", dragon heartstring core",
            patronus: "Otter",
            funFact: "Founded S.P.E.W. to help house-elves."
        },
        "Draco Malfoy": {
            wand: "Hawthorn, 10\", unicorn hair core",
            patronus: "None",
            funFact: "Became a Slytherin prefect in his 5th year."
        }
    };

    const extra = extraInfo[personagem.name] || {
        wand: "Unknown",
        patronus: "Unknown",
        funFact: "More information coming soon!"
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#252525', borderRadius: '20px', border: '2px solid #ffdb00' }}>
            <button
                onClick={aoVoltar}
                style={{ marginBottom: '20px', cursor: 'pointer', padding: '10px 20px', borderRadius: '15px', backgroundColor: '#ffdb00', border: 'none', fontWeight: 'bold' }}
            >
                ⬅ Back
            </button>

            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <img
                    src={extra.fotoLocal || personagem.image}
                    alt={personagem.name}
                    style={{ width: '300px', borderRadius: '15px', border: '5px solid #1a1a1a' }}
                />

                <div style={{ maxWidth: '450px', textAlign: 'left' }}>
                    <h2 style={{ color: '#ffdb00' }}>{personagem.name}</h2>
                    <p><strong>House:</strong> {personagem.house || "None"}</p>
                    <p><strong>Actor:</strong> {personagem.actor}</p>
                    <hr style={{ borderColor: '#444' }} />
                    <h4>✨ Description</h4>
                    <p><strong>Wand:</strong> {extra.wand}</p>
                    <p><strong>Patronus:</strong> {extra.patronus}</p>
                    <p><strong>Fun Fact:</strong> {extra.funFact}</p>
                </div>
            </div>
        </div>
    );
}
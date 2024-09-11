// components/Tile.jsx
import React from 'react';

function Tile({ img, title, paragraphs = [] }) {
    return (
        <section>
            {img ? (
                <img src={img} alt={title} />
            ) : (
                <>
                    <h2>{title}</h2>
                    {paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </>
            )}
        </section>
    );
}

export default Tile;

import React from 'react';

function Tiles({headerHOne, para, brandImage}) {
    return (
        <section>
            <h2>
                {headerHOne}
            </h2>
            <p>
                {para}
            </p>
            {brandImage}
        </section>
    );
}

export default Tiles;
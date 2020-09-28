import React from 'react'
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from '../hooks/useFetchGifs'
export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);
    //renombramos data a images
    
    return (
        <>
            <h3>{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loanding</p>}
            <div className="card-grid">
                { /* {...img} ->sirve para mandar las props tal cual se dan en el recorrido*/
                    images.map((img) =>
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    )
                }
            </div>
        </>
    )
}

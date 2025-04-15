export default function Modelos ({modelos}) {
    return (
    <article className="model-content">
            <div className="main-image-container ">
                <img 
                className="main-image" 
                src={modelos.img.src} 
                alt={modelos.img.alt} 
                />
    </div>

    <div> 
        <h2 className="modelos-title">{modelos.title}</h2>
        <p className="modelos-altura">{modelos.altura}</p>
        <p className="modelos-medidas">{modelos.medidas}</p>
        <p className="modelos-text">{modelos.text}</p>
    </div>
    </article>
    )
}
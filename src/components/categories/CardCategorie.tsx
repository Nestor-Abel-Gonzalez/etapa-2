import "./styles.css"

interface Categories {
    id: number;
    name: string;
    image: string;
    creationAt?: string;
    updatedAt?: string;
}


function CardCategorie(categorias: Categories){
    return(
        <>
        <div className="container-card">
            <div className="card">
                <img src={categorias.image} alt="categorie" />
            </div>
            <div>
                <h3>{categorias.name}</h3>                
            </div>
        </div>
            
        </>
    )
}

export default CardCategorie
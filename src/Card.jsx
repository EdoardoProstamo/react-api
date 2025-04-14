const Card = ({ person }) => {

    const { name, birth_year, nationality, awards, biography, image } = person;

    return <>
        <div className="container">
            <article className="nome">{name}</article>
            <img className="img" src={image} alt={name} />
            <article className="year">Born in: {birth_year}</article>
            <article className="nation">Nationality: {nationality}</article>
            <div className="awards-container">
                <article>Awards: </article>
                <article className="award">{awards[0]}, {awards[1]}</article>
            </div>
            <p className="bio">{biography}</p>
        </div>
    </>
}






export default Card;
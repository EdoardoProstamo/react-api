const Card = ({ person }) => {

    const { name, birth_year, nationality, awards, biography, image } = person;

    return <>
        <div>
            <article>{name}</article>
            <article>{birth_year}</article>
            <article>{nationality}</article>
            <article>{awards}</article>
            <p>{biography}</p>
            <img src={image} alt={name} />
        </div>
    </>
}






export default Card;
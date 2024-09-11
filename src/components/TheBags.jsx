function TheBags(props) {
    console.log(props);
    return (

            <article>
            <span>{props.title}</span>

            <img src={props.img} alt={props.name} />

            <p>{props.name}</p>
                <h4>{props.price}</h4>
            </article>

    );
}

export default TheBags;
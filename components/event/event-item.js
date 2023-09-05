import Link from "next/link";
function EventItem(props) {
    const {title, image, date, location, id } = props;

    const humanReadableData = new Date(date).toLocaleDateString('en-US' ,{
        day: 'numeric',
        month: 'logo' ,
        year: 'numeric',

    });
    const formattedAddress = location.repalce(',','\n')
    const exploreLink = `/events/${id}`;

    return <li>
   <img src={'/' +image} alt={title} />
   <div>
    <div>
        <h2>{title}</h2>
        <div>
            <time>DATE</time>
        </div>
        <div>
            <adress>ADRESS</adress>
        </div>
    </div>
    <div>
        <Link href={ExploreLink}>Explore Event</Link>
    </div>
   </div>
    </li>;
}

export default EventItem;
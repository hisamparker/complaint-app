import { Link } from "react-router-dom";
import Card from './Card';


const ListCards = ({tickets}) => {
  const sortedTickets = tickets.sort((a, b) => {
    return a.priority - b.priority;
  });
    return (
      <>
        <Card index="example" priority="1">
          <p>Example</p>
          <p>What is time?</p>
        </Card>
        {sortedTickets.length > 0 &&
          sortedTickets.map((ticket) => {
            return (
                <Link to={`tickets/${ticket._id}`}>
                    <Card key={ticket._id} priority={ticket.priority}>
                        <p>{ticket.user.name}</p>
                        <p>{ticket.complaint}</p>
                        <p>{ticket.createdAt.toString().substring(0, 10)}</p>
                    </Card>
                </Link>
            );
          })}
      </>
    );
}
 
export default ListCards;

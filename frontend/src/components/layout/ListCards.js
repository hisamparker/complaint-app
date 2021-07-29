import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from './Card';


const ListCards = ({tickets}) => {
  const sortedTickets = tickets.sort((a, b) => {
    return a.priority - b.priority;
  });
    return (
      <StyledSection>
        <Card index="example" priority="1">
          <p>Example</p>
          <p>What is time?</p>
        </Card>
        {sortedTickets.length > 0 &&
          sortedTickets.map((ticket, idx) => {
            return (
                <Link key={ticket._id + idx} to={`tickets/${ticket._id}`}>
                    <Card key={ticket._id} priority={ticket.priority}>
                        <p>{ticket.user.name}</p>
                        <p>{ticket.complaint}</p>
                        <p>{ticket.createdAt.toString().substring(0, 10)}</p>
                    </Card>
                </Link>
            );
          })}
      </StyledSection>
    );
}

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 70vw;
  margin: 0 auto;
`;
 
export default ListCards;

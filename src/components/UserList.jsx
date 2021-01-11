import { useContext } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { GlobalContext } from "../context/context";

export const UserList = () => {
  const { users, deleteUser } = useContext(GlobalContext);
  console.log(users);

  return (
    <ListGroup className="mt-4">
      {users.length > 0 ? (
        <>
          {users?.map(({ name, id }) => (
            <ListGroupItem className="d-flex" key={id}>
              <strong>{name}</strong>
              <div className="ml-auto">
                <Link to={`/edit/${id}`} className="btn btn-warning mr-1">
                  Edit
                </Link>
                <Button color="danger" onClick={() => deleteUser(id)}>
                  Delete
                </Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
        <h4 className="text-center">No Users</h4>
      )}
    </ListGroup>
  );
};

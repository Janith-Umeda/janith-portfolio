import { Card } from "react-bootstrap";

const Introduction = ()=>{
    return (
        <Card bg="warning" >
            <Card.Header>
                <h3 className="text-center text-black">Introduction</h3>
            </Card.Header>
            <Card.Body>
                <p className="text-black">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id accusamus, error repudiandae delectus,
                    eum incidunt totam neque laboriosam et porro suscipit hic doloremque laudantium voluptate!
                    Consequuntur expedita voluptates optio earum?
                </p>
            </Card.Body>
        </Card>
    );
}

export default Introduction;
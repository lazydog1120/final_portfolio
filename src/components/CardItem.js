import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export function CardItem({item}){
    return(
        <>
            <Card className="text-center" border="dark" style={{ width: '28rem' , height: 'auto'}}>
                <Card.Img variant="top" src={item.image} style={{ height: '16rem'}}/>
                <Card.Body>
                    <Card.Title>{item.project}</Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                    {/* <Button variant="primary" size="lg" href={item.link}>Go to Project</Button> */}
                    <Link to={item.link}><Button variant="primary" size="lg">Go to Project</Button></Link>
                </Card.Body>
            </Card>
        </>
        
    );
}
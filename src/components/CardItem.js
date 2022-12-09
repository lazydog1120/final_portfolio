import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export function CardItem({item}){
    return(
        <>
            <Card className="text-center" border="dark" style={{ width: '25rem' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.project}</Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                    <Button variant="primary" size="lg" href={item.link}>Go to Project</Button>
                </Card.Body>
            </Card>
        </>
        
    );
}
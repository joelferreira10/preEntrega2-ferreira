import { useState,useEffect} from 'react'
import products from '../../data/products.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Error404 from './Error404';
import { useParams } from 'react-router-dom';
const ItemDetailsContainer = () => {
    const [item, setItems] = useState([])
    const [error, setError] = useState(null);
    const {id}=useParams()
    useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000)   
        }).then(response=>{
            const findted=response.find(product =>id?product.category===id:response)
            if(findted){
              console.log(findted)
              setItems(findted)
              setError(null);
            }
                else throw new Error("Invalid response from server for category ")
                })
                .catch((error) => {
                  console.log("Error:", error.message)
                  setError(error.message);
                });
        },[id])
        console.log("error",error)
        if (error) {
        return <Error404 />; 
      }
  return (
    <>
    
    <Card>
      <Card.Header>{item.name}</Card.Header>
      <Card.Img variant="top" src={item.img}style={{ width: '30rem' }}/>
      <Card.Body>
        {/* <Card.Title>Special title treatment</Card.Title> */}
        <Card.Text>
          {item.description}
        </Card.Text>
        <Card.Text>
         precio:${item.price}
        </Card.Text>
        <Button variant="primary">Agregar a carrito</Button>
      </Card.Body>
    </Card>
      
    </>
  )
}

export default ItemDetailsContainer

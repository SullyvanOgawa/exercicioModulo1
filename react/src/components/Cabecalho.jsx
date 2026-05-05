import {Navbar} from 'react-bootstrap'
export default function Cabecalho({titulo}){
    return(
        <Navbar bg='primary' variant='dark'>
            <Navbar.Brand><h1>{titulo}</h1></Navbar.Brand>
        </Navbar>
    );
}
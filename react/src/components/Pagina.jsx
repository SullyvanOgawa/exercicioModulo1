import {Container} from 'react-bootstrap';
import Cabecalho from "./Cabecalho";
import Main from './Main';
export default function Pagina(){
    return(
        <Container>
            <Cabecalho/>
            <Main/>
        </Container>
    );
}
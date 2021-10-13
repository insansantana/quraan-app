import { Container,Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';

const Home = ({ surahs }) => {
	return (
	  	<Container className="p-5">
		  	<Row sm={1} md={2} xl={3}>
              	{surahs.map((surah) => (
               		<Card key={surah.number} surah={surah} />
              	))}
            </Row>
      	</Container>
	)
}

export default Home
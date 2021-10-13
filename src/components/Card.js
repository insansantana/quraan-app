import { Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Card = ({ surah }) => {
	return (
        <Col>
          <div className="d-flex flex bd-highlight border mb-3">
            <div className="p-3 bd-highlight align-self-center">{surah.number}</div>
              <div className="p-3 flex-grow-1 bd-highlight align-self-center">
                <Link to={{
                  pathname:surah.name.transliteration.id + "/" + surah.number,
                  state:{surah}
                }} className="d-block text-decoration-none">{surah.name.transliteration.id} ({surah.numberOfVerses})</Link>
                <small className="text-muted">{surah.name.translation.id}</small>
              </div>
            <div className="p-3 bd-highlight align-self-center fs-4">{surah.name.short}</div>
          </div>
        </Col>
		)
}

export default Card
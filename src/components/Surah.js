import { useEffect, useState, useRef } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlay, FaPause } from "react-icons/fa";


const Surah = () => {
	const {id} 						= useParams()
	const [ayah, setAyah] = useState([]);
	const audio 					= useRef(null)
	const [playing, setPlaying] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)

  	useEffect(() => {
			fetch(`https://api.quran.sutanlab.id/surah/${id}`)
			.then((response) => response.json())
			.then(res => setAyah(res.data.verses))

  	}, [])

  	useEffect(() => {
  		
			const playSound = () => {
				if (audio.current) {
					if (playing) {
						audio.current.src = ayah[currentIndex].audio.secondary[0]
					 	audio.current.play()
					 	audio.current.onended = () => {
					 		setCurrentIndex(currentIndex + 1)
					 	}
					}else{
						audio.current.pause()
					}
				}

				if (currentIndex === (ayah.length - 1)) {
					audio.current.onended = () => {
				 		setPlaying(false)
				 	}
				}
			}
			playSound()
		
		},[playing, currentIndex])

  	function toggle(i) {
  		if (currentIndex === i) {
  			setPlaying(!playing)
  		}
  		
  		setCurrentIndex(i)
  	}
	return (
		<Container>	
			{ayah.map((a,i) =>
				<Row key={a.number.inSurah} className="">
					<Col className="p-4 border-bottom">
					<Col>
							<audio ref={audio}></audio>
							<button className="btn btn-warning" onClick={() => toggle(i)}>{playing ? (currentIndex === i ? <FaPause /> : <FaPlay />) : <FaPlay />}</button>
					</Col>	
						<p dir="rtl" className="fs-4">{a.text.arab}</p>
						<p className="fs-6">{a.text.transliteration.en}</p>
						<p className="fs-6">{a.number.inSurah}. {a.translation.id}</p>
					</Col>	
				</Row>
			)}
			<Link to="/"><Button variant="dark" className="my-5">Back</Button></Link>
     	</Container>
		)
}

export default Surah
import { Link } from 'react-router-dom';
import '../../assets/heroStyles.css'
import Button from '@mui/material/Button'

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {

  const imgUrl = `../heroes/${id}.jpg`;

  return (
    <div className='card'>
      <img src={imgUrl} alt={superhero} className="hero-img"/>
      <div className='hero-description'>
        <h5 className='hero-name'>{superhero}</h5>
        <div>{alter_ego === characters ? "" : alter_ego}</div>
        <div className='hero-characters'>{characters === superhero ? "" : characters}</div>
        <div className='hero-appearance'>{first_appearance}</div>
        <Button variant="contained" color="primary">
          op
        </Button>
          <Link to={`/hero/${id}`}>More...</Link>
           
      </div>
    </div>
  );
};



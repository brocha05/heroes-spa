import '../../assets/heroStyles.css'

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
    <>
      <div>
        {superhero}
      </div>
      <img src={imgUrl} alt={superhero} />
    </>
  );
};



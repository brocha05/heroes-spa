export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imgUrl = '../../assets/heroes/dc-arrow.jpg';
    // const heroImage = `../../assets/heroes/${id}.jpg`
  return (
    <>
      <div>
        {superhero}
      </div>
      <img src={imgUrl} alt={superhero} />
    </>
  );
};



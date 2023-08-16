import './_Home.scss';
import Banner from '../../components/Banner/Affiche.jsx';
import Cards from '../../components/Cards/Cards.jsx';
import imageHome from '../../assets/img.png';



const Home = () => {
  return (
    <div className='home'>
      <Banner imageUrl={imageHome} title="Chez vous, partout et ailleurs" />
      <Cards />
    </div>
  );
};

export default Home;











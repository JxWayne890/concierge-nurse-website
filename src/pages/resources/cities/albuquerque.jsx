import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'albuquerque');

export default function Albuquerque() {
  return <CityPageTemplate cityData={cityData} />;
}

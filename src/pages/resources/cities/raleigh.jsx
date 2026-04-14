import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'raleigh');

export default function Raleigh() {
  return <CityPageTemplate cityData={cityData} />;
}

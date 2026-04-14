import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'milwaukee');

export default function Milwaukee() {
  return <CityPageTemplate cityData={cityData} />;
}

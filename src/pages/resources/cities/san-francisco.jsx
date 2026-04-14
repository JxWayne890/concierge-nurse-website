import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'san-francisco');

export default function SanFrancisco() {
  return <CityPageTemplate cityData={cityData} />;
}

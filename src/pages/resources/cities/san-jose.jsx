import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'san-jose');

export default function SanJose() {
  return <CityPageTemplate cityData={cityData} />;
}

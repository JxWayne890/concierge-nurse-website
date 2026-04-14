import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'tampa');

export default function Tampa() {
  return <CityPageTemplate cityData={cityData} />;
}

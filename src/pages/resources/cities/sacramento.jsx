import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'sacramento');

export default function Sacramento() {
  return <CityPageTemplate cityData={cityData} />;
}

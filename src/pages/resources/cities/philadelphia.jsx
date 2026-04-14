import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'philadelphia');

export default function Philadelphia() {
  return <CityPageTemplate cityData={cityData} />;
}

import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'birmingham');

export default function Birmingham() {
  return <CityPageTemplate cityData={cityData} />;
}

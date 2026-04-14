import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'boston');

export default function Boston() {
  return <CityPageTemplate cityData={cityData} />;
}

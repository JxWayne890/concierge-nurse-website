import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'louisville');

export default function Louisville() {
  return <CityPageTemplate cityData={cityData} />;
}

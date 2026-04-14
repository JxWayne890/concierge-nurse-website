import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'cleveland');

export default function Cleveland() {
  return <CityPageTemplate cityData={cityData} />;
}

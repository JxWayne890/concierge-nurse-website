import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'dallas');

export default function Dallas() {
  return <CityPageTemplate cityData={cityData} />;
}

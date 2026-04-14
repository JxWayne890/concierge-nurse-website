import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'san-diego');

export default function SanDiego() {
  return <CityPageTemplate cityData={cityData} />;
}

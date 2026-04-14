import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'kansas-city');

export default function KansasCity() {
  return <CityPageTemplate cityData={cityData} />;
}

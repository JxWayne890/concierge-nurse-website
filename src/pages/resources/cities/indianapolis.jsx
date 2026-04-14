import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'indianapolis');

export default function Indianapolis() {
  return <CityPageTemplate cityData={cityData} />;
}

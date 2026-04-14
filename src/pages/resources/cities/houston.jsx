import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'houston');

export default function Houston() {
  return <CityPageTemplate cityData={cityData} />;
}

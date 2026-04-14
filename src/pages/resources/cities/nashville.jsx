import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'nashville');

export default function Nashville() {
  return <CityPageTemplate cityData={cityData} />;
}

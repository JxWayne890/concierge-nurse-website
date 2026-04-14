import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'chicago');

export default function Chicago() {
  return <CityPageTemplate cityData={cityData} />;
}

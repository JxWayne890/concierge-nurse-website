import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'austin');

export default function Austin() {
  return <CityPageTemplate cityData={cityData} />;
}

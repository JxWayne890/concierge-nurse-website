import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'orlando');

export default function Orlando() {
  return <CityPageTemplate cityData={cityData} />;
}

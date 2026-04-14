import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'honolulu');

export default function Honolulu() {
  return <CityPageTemplate cityData={cityData} />;
}

import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'boise');

export default function Boise() {
  return <CityPageTemplate cityData={cityData} />;
}

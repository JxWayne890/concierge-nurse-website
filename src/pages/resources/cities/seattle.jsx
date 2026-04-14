import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'seattle');

export default function Seattle() {
  return <CityPageTemplate cityData={cityData} />;
}

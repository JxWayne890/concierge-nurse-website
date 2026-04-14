import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'charlotte');

export default function Charlotte() {
  return <CityPageTemplate cityData={cityData} />;
}

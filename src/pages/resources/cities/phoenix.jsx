import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'phoenix');

export default function Phoenix() {
  return <CityPageTemplate cityData={cityData} />;
}

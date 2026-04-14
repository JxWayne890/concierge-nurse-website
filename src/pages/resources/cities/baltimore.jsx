import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'baltimore');

export default function Baltimore() {
  return <CityPageTemplate cityData={cityData} />;
}

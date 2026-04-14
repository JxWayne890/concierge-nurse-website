import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'minneapolis');

export default function Minneapolis() {
  return <CityPageTemplate cityData={cityData} />;
}

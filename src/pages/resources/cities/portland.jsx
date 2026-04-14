import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'portland');

export default function Portland() {
  return <CityPageTemplate cityData={cityData} />;
}

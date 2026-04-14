import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'denver');

export default function Denver() {
  return <CityPageTemplate cityData={cityData} />;
}

import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'jacksonville');

export default function Jacksonville() {
  return <CityPageTemplate cityData={cityData} />;
}

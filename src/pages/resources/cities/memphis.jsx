import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'memphis');

export default function Memphis() {
  return <CityPageTemplate cityData={cityData} />;
}

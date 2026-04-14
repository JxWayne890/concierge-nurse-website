import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'new-orleans');

export default function NewOrleans() {
  return <CityPageTemplate cityData={cityData} />;
}

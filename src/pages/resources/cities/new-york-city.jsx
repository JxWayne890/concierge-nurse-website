import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'new-york-city');

export default function NewYorkCity() {
  return <CityPageTemplate cityData={cityData} />;
}

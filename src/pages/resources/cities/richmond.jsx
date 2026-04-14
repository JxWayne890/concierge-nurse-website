import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'richmond');

export default function Richmond() {
  return <CityPageTemplate cityData={cityData} />;
}

import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'oklahoma-city');

export default function OklahomaCity() {
  return <CityPageTemplate cityData={cityData} />;
}

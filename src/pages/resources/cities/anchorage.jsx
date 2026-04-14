import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'anchorage');

export default function Anchorage() {
  return <CityPageTemplate cityData={cityData} />;
}

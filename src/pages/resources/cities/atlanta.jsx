import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'atlanta');

export default function Atlanta() {
  return <CityPageTemplate cityData={cityData} />;
}

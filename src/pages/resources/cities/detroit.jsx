import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'detroit');

export default function Detroit() {
  return <CityPageTemplate cityData={cityData} />;
}

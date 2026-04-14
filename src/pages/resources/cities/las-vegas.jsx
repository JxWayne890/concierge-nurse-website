import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'las-vegas');

export default function LasVegas() {
  return <CityPageTemplate cityData={cityData} />;
}

import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'los-angeles');

export default function LosAngeles() {
  return <CityPageTemplate cityData={cityData} />;
}

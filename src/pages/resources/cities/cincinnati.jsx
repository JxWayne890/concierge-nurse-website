import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'cincinnati');

export default function Cincinnati() {
  return <CityPageTemplate cityData={cityData} />;
}

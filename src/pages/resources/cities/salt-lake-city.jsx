import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'salt-lake-city');

export default function SaltLakeCity() {
  return <CityPageTemplate cityData={cityData} />;
}

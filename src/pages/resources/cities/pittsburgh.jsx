import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'pittsburgh');

export default function Pittsburgh() {
  return <CityPageTemplate cityData={cityData} />;
}

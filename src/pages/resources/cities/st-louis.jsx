import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'st-louis');

export default function StLouis() {
  return <CityPageTemplate cityData={cityData} />;
}

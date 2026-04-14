import { cities } from '../../../data/cities';
import CityPageTemplate from '../../../components/CityPageTemplate';

const cityData = cities.find(c => c.slug === 'columbus');

export default function Columbus() {
  return <CityPageTemplate cityData={cityData} />;
}

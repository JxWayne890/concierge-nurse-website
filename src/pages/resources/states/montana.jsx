import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'MT');

export default function Montana() {
  return <StatePageTemplate stateData={stateData} />;
}

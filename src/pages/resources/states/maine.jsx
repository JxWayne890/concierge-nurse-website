import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'ME');

export default function Maine() {
  return <StatePageTemplate stateData={stateData} />;
}

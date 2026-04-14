import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'FL');

export default function Florida() {
  return <StatePageTemplate stateData={stateData} />;
}

import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'VA');

export default function Virginia() {
  return <StatePageTemplate stateData={stateData} />;
}

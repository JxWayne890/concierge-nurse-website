import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'CA');

export default function California() {
  return <StatePageTemplate stateData={stateData} />;
}

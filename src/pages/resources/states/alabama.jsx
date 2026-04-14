import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'AL');

export default function Alabama() {
  return <StatePageTemplate stateData={stateData} />;
}

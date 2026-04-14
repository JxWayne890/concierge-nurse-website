import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'CT');

export default function Connecticut() {
  return <StatePageTemplate stateData={stateData} />;
}

import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'PA');

export default function Pennsylvania() {
  return <StatePageTemplate stateData={stateData} />;
}

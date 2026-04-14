import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'MO');

export default function Missouri() {
  return <StatePageTemplate stateData={stateData} />;
}

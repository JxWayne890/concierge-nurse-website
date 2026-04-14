import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'NH');

export default function NewHampshire() {
  return <StatePageTemplate stateData={stateData} />;
}

import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'AR');

export default function Arkansas() {
  return <StatePageTemplate stateData={stateData} />;
}

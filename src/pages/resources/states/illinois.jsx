import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'IL');

export default function Illinois() {
  return <StatePageTemplate stateData={stateData} />;
}

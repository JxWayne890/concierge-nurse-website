import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'SD');

export default function SouthDakota() {
  return <StatePageTemplate stateData={stateData} />;
}

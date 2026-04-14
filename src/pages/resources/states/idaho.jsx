import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'ID');

export default function Idaho() {
  return <StatePageTemplate stateData={stateData} />;
}

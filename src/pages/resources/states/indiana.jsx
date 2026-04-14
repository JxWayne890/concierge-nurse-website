import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'IN');

export default function Indiana() {
  return <StatePageTemplate stateData={stateData} />;
}

import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'TN');

export default function Tennessee() {
  return <StatePageTemplate stateData={stateData} />;
}

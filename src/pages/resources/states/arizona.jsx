import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'AZ');

export default function Arizona() {
  return <StatePageTemplate stateData={stateData} />;
}

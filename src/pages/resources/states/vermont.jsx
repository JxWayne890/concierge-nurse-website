import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'VT');

export default function Vermont() {
  return <StatePageTemplate stateData={stateData} />;
}

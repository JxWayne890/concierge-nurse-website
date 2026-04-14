import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'MN');

export default function Minnesota() {
  return <StatePageTemplate stateData={stateData} />;
}

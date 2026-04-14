import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'AK');

export default function Alaska() {
  return <StatePageTemplate stateData={stateData} />;
}

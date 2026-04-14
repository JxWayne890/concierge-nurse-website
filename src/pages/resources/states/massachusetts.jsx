import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'MA');

export default function Massachusetts() {
  return <StatePageTemplate stateData={stateData} />;
}

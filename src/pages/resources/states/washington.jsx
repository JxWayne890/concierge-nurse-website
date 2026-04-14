import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'WA');

export default function Washington() {
  return <StatePageTemplate stateData={stateData} />;
}

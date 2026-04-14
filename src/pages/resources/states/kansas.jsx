import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'KS');

export default function Kansas() {
  return <StatePageTemplate stateData={stateData} />;
}

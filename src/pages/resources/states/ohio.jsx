import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'OH');

export default function Ohio() {
  return <StatePageTemplate stateData={stateData} />;
}

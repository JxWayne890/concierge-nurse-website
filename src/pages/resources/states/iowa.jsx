import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'IA');

export default function Iowa() {
  return <StatePageTemplate stateData={stateData} />;
}

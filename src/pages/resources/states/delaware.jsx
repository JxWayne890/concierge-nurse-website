import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'DE');

export default function Delaware() {
  return <StatePageTemplate stateData={stateData} />;
}

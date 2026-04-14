import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'GA');

export default function GeorgiaState() {
  return <StatePageTemplate stateData={stateData} />;
}

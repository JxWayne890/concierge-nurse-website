import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'MI');

export default function Michigan() {
  return <StatePageTemplate stateData={stateData} />;
}

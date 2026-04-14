import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'MS');

export default function Mississippi() {
  return <StatePageTemplate stateData={stateData} />;
}

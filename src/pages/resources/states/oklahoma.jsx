import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'OK');

export default function Oklahoma() {
  return <StatePageTemplate stateData={stateData} />;
}

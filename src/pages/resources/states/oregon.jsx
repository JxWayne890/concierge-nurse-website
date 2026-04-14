import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'OR');

export default function Oregon() {
  return <StatePageTemplate stateData={stateData} />;
}

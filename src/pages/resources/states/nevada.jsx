import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'NV');

export default function Nevada() {
  return <StatePageTemplate stateData={stateData} />;
}

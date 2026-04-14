import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'WV');

export default function WestVirginia() {
  return <StatePageTemplate stateData={stateData} />;
}

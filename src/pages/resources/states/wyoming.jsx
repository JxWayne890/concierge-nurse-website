import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'WY');

export default function Wyoming() {
  return <StatePageTemplate stateData={stateData} />;
}

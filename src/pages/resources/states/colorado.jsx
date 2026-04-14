import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'CO');

export default function Colorado() {
  return <StatePageTemplate stateData={stateData} />;
}

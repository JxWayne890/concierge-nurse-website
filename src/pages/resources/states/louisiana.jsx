import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'LA');

export default function Louisiana() {
  return <StatePageTemplate stateData={stateData} />;
}

import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'NE');

export default function Nebraska() {
  return <StatePageTemplate stateData={stateData} />;
}

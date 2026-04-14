import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'WI');

export default function Wisconsin() {
  return <StatePageTemplate stateData={stateData} />;
}

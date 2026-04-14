import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'UT');

export default function Utah() {
  return <StatePageTemplate stateData={stateData} />;
}

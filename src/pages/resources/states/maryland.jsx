import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'MD');

export default function Maryland() {
  return <StatePageTemplate stateData={stateData} />;
}

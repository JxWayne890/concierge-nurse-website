import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'NM');

export default function NewMexico() {
  return <StatePageTemplate stateData={stateData} />;
}

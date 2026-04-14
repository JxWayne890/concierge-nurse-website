import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'SC');

export default function SouthCarolina() {
  return <StatePageTemplate stateData={stateData} />;
}

import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'NC');

export default function NorthCarolina() {
  return <StatePageTemplate stateData={stateData} />;
}

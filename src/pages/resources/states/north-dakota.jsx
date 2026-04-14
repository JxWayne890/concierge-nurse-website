import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'ND');

export default function NorthDakota() {
  return <StatePageTemplate stateData={stateData} />;
}

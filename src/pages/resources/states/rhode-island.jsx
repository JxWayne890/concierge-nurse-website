import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'RI');

export default function RhodeIsland() {
  return <StatePageTemplate stateData={stateData} />;
}

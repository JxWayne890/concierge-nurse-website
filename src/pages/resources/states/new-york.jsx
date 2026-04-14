import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'NY');

export default function NewYork() {
  return <StatePageTemplate stateData={stateData} />;
}

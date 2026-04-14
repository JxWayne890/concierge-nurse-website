import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'NJ');

export default function NewJersey() {
  return <StatePageTemplate stateData={stateData} />;
}

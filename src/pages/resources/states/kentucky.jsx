import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'KY');

export default function Kentucky() {
  return <StatePageTemplate stateData={stateData} />;
}

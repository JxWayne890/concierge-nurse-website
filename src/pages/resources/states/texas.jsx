import { states } from '../../../data/states';
import StatePageTemplate from '../../../components/StatePageTemplate';

const stateData = states.find(s => s.abbreviation === 'TX');

export default function Texas() {
  return <StatePageTemplate stateData={stateData} />;
}

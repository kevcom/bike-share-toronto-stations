import DS from 'ember-data';
import { capitalize } from '@ember/string';

export default DS.Transform.extend({
  deserialize(serialized) {
    const capitalized = serialized.map(word => {
        return capitalize(word);
    });
    return capitalized.join(' & ');
  }
});

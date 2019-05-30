import EmberObject from '@ember/object';
import PbscAPIMixin from 'zoocasa-ember/mixins/-pbsc-api';
import { module, test } from 'qunit';

module('Unit | Mixin | _pbscAPI', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let PbscAPIObject = EmberObject.extend(PbscAPIMixin);
    let subject = PbscAPIObject.create();
    assert.ok(subject);
  });
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('numbered-blocks', 'Integration | Component | numbered blocks', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{numbered-blocks}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#numbered-blocks}}
      template block text
    {{/numbered-blocks}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

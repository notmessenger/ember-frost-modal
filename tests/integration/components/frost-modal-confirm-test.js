/* jshint expr:true */
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'frost-modal-confirm',
  'Integration: FrostModalConfirmComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#frost-modal-confirm}}
      //     template content
      //   {{/frost-modal-confirm}}
      // `);

      this.render(hbs`{{frost-modal-confirm}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)

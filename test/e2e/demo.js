/**
 * Created by xinzhang on 7/3/17.
 */

module.exports = {
  'Type in value and click add button' : function (browser) {
    browser
      .url('http://localhost:3000/app')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'e2e test')
      .waitForElementVisible('button[name=addBtn]', 1000)
      .click('button[name=addBtn]')
      .expect.element('b').text.to.equal('e2e test');
  },

  'Click value to make it completed' : function (browser) {
    browser
      .click('b')
      .assert.attributeContains('li', 'style', 'line-through');
  },

  'Click value again to make it uncompleted' : function (browser) {
    browser
      .click('b')
      .assert.attributeContains('li', 'style', 'none')
  },

  'Click delete icon to remove item' : function (browser) {
    browser
      .click('span[name=deleteIcon]')
      .expect.element('ul').text.not.to.contain('e2e test');
  },

  after(browser) {
    browser.end();
  }

};

// spec.js
describe('Code to interact with Angular JS elements', function() {
it('should multiply two integers', function() {
browser.get('http://juliemr.github.io/protractor-demo/');
element(by.model('first')).sendKeys(5);
element(by.model('second')).sendKeys(5);
element(by.model('operator')).click();
element(by.xpath(".//option[@value= 'MULTIPLICATION']")).click();
element(by.id('gobutton')).click();
//expect(element(by.binding('latest')) .getText()).toEqual('10'); //Incorrect expectation
expect(element(by.binding('latest')) .getText()).toEqual('25'); //Correct expectation
});
});

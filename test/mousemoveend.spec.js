const expect = chai.expect;

describe('mousemoveend', () => {
  it('should trigger the mouseend event after mousemove starts', done => {
    const handler = e => {
      expect(e.type).to.equal('mouseend');
      document.removeEventListener('mouseend', handler);
      done();
    }
    document.addEventListener('mouseend', handler);
    document.dispatchEvent(new Event('mousemove'));
  });
});
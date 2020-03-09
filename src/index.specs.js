const { expect } = require('chai');
const index = require('./index');

describe('index', () => {
  it('should expose all of the utility functions', () => {
    expect(index.deleteFolderIfExists).to.be.a('function');
    expect(index.deleteIfExists).to.be.a('function');
    expect(index.fileExists).to.be.a('function');
    expect(index.find).to.be.a('function');
  });
});

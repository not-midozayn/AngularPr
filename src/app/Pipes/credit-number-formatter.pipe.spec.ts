import { CreditNumberFormatterPipe } from './credit-number-formatter.pipe';

describe('CreditNumberFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new CreditNumberFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});

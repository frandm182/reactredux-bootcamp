import expect from 'expect';
import { authorsFormattedForDropdown } from './selectors';

describe ('Authors selectors', () => {
  describe ('authorsFormattedForDropdown', () => {
    it('should return author from formatted for use in a dropdown', () => {
      const authors = [
        { id: 'shafiq-marediya', firstName: 'Shafiq', lastName: 'Marediya' }
      ];

      const expected = [
        { value: 'shafiq-marediya', text: 'Shafiq Marediya' }
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});

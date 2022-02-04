import { expect } from '@jest/globals';
import {sortByNameAsc, sortByNameDesc} from '../SortUtils.js'

// test array is sorted in ascending order
test('sortByNameAsc sorts array in ascending order', () => {
    const testArray = [{"name": 'kiwi'}, {"name": 'grapes'},{"name": 'apples'}];
    expect(testArray.sort(sortByNameAsc)[0]).toEqual({"name": 'apples'});
    expect(testArray.sort(sortByNameAsc)[1]).toEqual({"name": 'grapes'});
    expect(testArray.sort(sortByNameAsc)[2]).toEqual({"name": 'kiwi'});
});

// test array is sorted in descending order
test('sortByNameDesc sorts array in descending order', () => {
    const testArray = [{"name": 'kiwi'}, {"name": 'grapes'},{"name": 'apples'}];
    expect(testArray.sort(sortByNameDesc)[0]).toEqual({"name": 'kiwi'});
    expect(testArray.sort(sortByNameDesc)[1]).toEqual({"name": 'grapes'});
    expect(testArray.sort(sortByNameDesc)[2]).toEqual({"name": 'apples'});
});

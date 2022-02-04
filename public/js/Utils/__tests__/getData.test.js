import { expect } from '@jest/globals';
import getJsonData from '../getData.js';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        //returns a Promise which resolves to an object with json() method
        //which will also be resolved for this mock
        ok: true,
        json: () => {
            return Promise.resolve({"data": [{
            "id": "1",
            "type": "folder",
            "name": "Documents",
            "modified": "12/12/2021",
            "size": 1024,
            children: []
        }]})}
    });
});

describe("getData tests", () => {
  test("test getJsonData returns data when successful", async () => {
    expect.assertions(1);
    const data = await getJsonData("/files");
    expect(data).toEqual({"data": [{
        "id": "1",
        "type": "folder",
        "name": "Documents",
        "modified": "12/12/2021",
        "size": 1024,
        children: []
    }]});
  })

  test("test getJsonData returns an error for failure", () => {
    expect.assertions(1);
    fetch.mockImplementationOnce(() => {
      return Promise.resolve({
        ok: false,
        status: 404
      })
    })
    return getJsonData("/files").catch((error) => {
      expect(error.message).toBe('HTTP Error code: 404');
    });
  })
})

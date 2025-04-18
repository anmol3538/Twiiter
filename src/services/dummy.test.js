const dummyfunctions = require('../../src/services/dummy-service')

test('result is true and returns learning JS', () => {
    //jest.mock(helper, () => true)
    const spy = jest.spyOn(dummyfunctions, 'helper').mockImplementation(() => {
        return true;
    })
    const result = dummyfunctions.execute();
    expect(spy).toHaveBeenCalled();
    expect(result).toBe('learning JS');
})

test('result is true and returns learning JS', () => {
    //jest.mock(helper, () => true)
    const spy = jest.spyOn(dummyfunctions, 'helper').mockImplementation(() => {
        return false;
    })
    const result = dummyfunctions.execute();
    expect(spy).toHaveBeenCalled();
    expect(result).toBe('learning reactjs');
})
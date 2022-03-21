import Greetings from '../src/greetings';
test('should be pass', ()=> {
    expect(Greetings('jorge')).toBe('Hello jorge');
})
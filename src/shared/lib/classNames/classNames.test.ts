import { classNames } from './classNames';

describe('classnames', () => {
  test('with first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with add class', () => {
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe('someClass class1 class2');
  });

  test('with modes', () => {
    expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1'])).toBe('someClass class1 hovered');
  });

  test('with undefiend', () => {
    expect(classNames('someClass', { hovered: undefined, scrollable: false }, ['class1'])).toBe('someClass class1');
  });
});

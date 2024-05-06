// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';



test('Valid phone number 1', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});


test('Valid phone number 2', () => {
  expect(isPhoneNumber('555-555-5555')).toBe(true);
});


test('Invalid phone number 1', () => {
  expect(isPhoneNumber('1234')).toBe(false);
});


test('Invalid phone number 2', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});


test('Valid email 1', () => {
  expect(isEmail('test@example.com')).toBe(true);
});


test('Valid email 2', () => {
  expect(isEmail('email123@gmail.com')).toBe(true);
});


test('Invalid email 1', () => {
  expect(isEmail('test@.com')).toBe(false);
});


test('Invalid email 2', () => {
  expect(isEmail('email@invalid')).toBe(false);
});


test('Valid strong password 1', () => {
  expect(isStrongPassword('Password123')).toBe(true);
});


test('Valid strong password 2', () => {
  expect(isStrongPassword('Password_456')).toBe(true);
});


test('Invalid strong password 1 (too short)', () => {
  expect(isStrongPassword('123#')).toBe(false);
});


test('Invalid strong password 2 (no letters)', () => {
  expect(isStrongPassword('12345678')).toBe(false);
});


test('Valid date 1', () => {
  expect(isDate('12/25/2023')).toBe(true);
});


test('Valid date 2', () => {
  expect(isDate('1/1/2022')).toBe(true);
});


test('Invalid date 1 (invalid format)', () => {
  expect(isDate('2023-12-25')).toBe(false);
});


test('Invalid date 2 (invalid month)', () => {
  expect(isDate('13/25/20234')).toBe(false);
});


test('Valid hex color 1', () => {
  expect(isHexColor('#ff0000')).toBe(true);
});


test('Valid hex color 2', () => {
  expect(isHexColor('#00ff00')).toBe(true);
});


test('Invalid hex color 1 (invalid characters)', () => {
  expect(isHexColor('#ghijkl')).toBe(false);
});


test('Invalid hex color 2 (too short)', () => {
  expect(isHexColor('#ab')).toBe(false);
});

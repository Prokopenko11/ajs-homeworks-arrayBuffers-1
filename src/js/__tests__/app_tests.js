import Character from '../character';
import Magician from '../magician';
import Daemon from '../daemon';

test('should set attack value correctly', () => {
  const character = new Character(100);
  character.attack = 150;
  expect(character.baseAttack).toBe(150);
});

test('should get stoned state correctly', () => {
  const character = new Character(100);
  character.stoned = true;
  expect(character.stoned).toBe(true);
});

test('should get distance value correctly', () => {
  const character = new Character(100);
  character.distance = 4;
  expect(character.distance).toBe(4);
});

test('testing Magician attack with stoned at distance 2', () => {
  const magician = new Magician(150);
  magician.distance = 2;
  magician.stoned = true;
  expect(magician.attack).toBe(130);
});

test('testing Daemon attack without stoned at distance 5', () => {
  const daemon = new Daemon(100);
  daemon.distance = 5;
  expect(daemon.attack).toBe(60);
});

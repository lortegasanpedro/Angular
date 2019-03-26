import { SingeltonEquipos } from './singelton-equipos';

describe('SingeltonEquipos', () => {
  it('should create an instance', () => {
    expect(new SingeltonEquipos()).toBeTruthy();
  });
});

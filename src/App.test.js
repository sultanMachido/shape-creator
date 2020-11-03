import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';



test('Shape selection test for rectangle', () => {
  render(<App />);
  const Txt = screen.getByLabelText('rectangle');
  screen.debug()
  fireEvent.change(Txt,{
    target:{value:'rectangle'}
  })
  screen.debug()
});

test('test for circle', () => {
  render(<App />);
  const Txt = screen.getByLabelText('circle');
  screen.debug()
  fireEvent.change(Txt,{
    target:{value:'circle'}
  })
  screen.debug()
});

test('test for polygon', () => {
  render(<App />);
  const Txt = screen.getByLabelText('polygon');
  screen.debug()
  fireEvent.change(Txt,{
    target:{value:'polygon'}
  })
  screen.debug()
});


test('test for ellipse', () => {
  render(<App />);
  const Txt = screen.getByLabelText('ellipse');
  screen.debug()
  fireEvent.change(Txt,{
    target:{value:'ellipse'}
  })
  screen.debug()
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  
});
describe('check if there is an input ,button to add',()=>{
  it("check input type",()=>{
        
    const comp=render(<App ></App>)
    expect(comp.getByTestId("input")).toHaveAttribute("type",'text')
})
it("check if add button is present",()=>{
        
  const comp=render(<App ></App>)
  expect(comp.getByTestId("mainDiv")).toContainElement(comp.getByTestId("add"))
})
})

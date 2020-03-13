import React from "react";
import { render } from "@testing-library/react";
import App from './App';
import Episodes from './components/Episodes';


test('episode component renders correctly', () => {
    const { queryAllByTestId} = render(<Episodes episodes={[]} />);
    expect(queryAllByTestId('episode')).toStrictEqual([]);
    expect(queryAllByTestId('episode')).toHaveLength(0);

}); 
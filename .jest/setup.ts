import "@testing-library/jest-dom";

jest.mock('@mui/material/styles', () => ({
    ...jest.requireActual('@mui/material/styles'),
    useColorScheme: () => ({
      mode: 'light',
      setMode: jest.fn(),
      systemMode: 'light'
    })
  }));
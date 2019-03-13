import {
  Q1, Q2, Q3, Q4, Q5,
} from '../../svg/easy';

const easy = [
  {
    id: 'e1',
    image: Q1,
    inputs: [
      { title: '1 - 2', names: ['A', 'B1'] },
      { title: '2 - 3', names: ['B2', 'C'] },
      { title: 'X1', names: ['AX'] },
      { title: 'Y1', names: ['AY'] },
      { title: 'Y3', names: ['CY'] },
    ],
    answer: {
      A: 'Z',
      B1: 'P',
      B2: 'P',
      C: 'Z',
      AX: 'Z',
      AY: 'N',
      CY: 'N',
    },
  },
  {
    id: 'e2',
    image: Q2,
    inputs: [
      { title: '1 - 2', names: ['A', 'B1'] },
      { title: '2 - 3', names: ['B2', 'C'] },
      { title: 'X1', names: ['AX'] },
      { title: 'Y1', names: ['AY'] },
      { title: 'M1', names: ['AM'] },
    ],
    answer: {
      A: 'N',
      B1: 'Z',
      B2: 'Z',
      C: 'Z',
      AX: 'Z',
      AY: 'N',
      AM: 'N',
    },
  },
  {
    id: 'e3',
    image: Q3,
    inputs: [
      { title: '1 - 2', names: ['A', 'B1'] },
      { title: '2 - 3', names: ['B2', 'C1'] },
      { title: '3 - 4', names: ['C2', 'D'] },
      { title: 'X1', names: ['AX'] },
      { title: 'Y1', names: ['AY'] },
      { title: 'Y3', names: ['CY'] },
    ],
    answer: {
      A: 'Z',
      B1: 'P',
      B2: 'P',
      C1: 'Z',
      C2: 'Z',
      D: 'Z',
      AX: 'Z',
      AY: 'N',
      CY: 'N',
    },
  },
  {
    id: 'e4',
    image: Q4,
    inputs: [
      { title: '1 - 2', names: ['A', 'B1'] },
      { title: '2 - 3', names: ['B2', 'C'] },
      { title: 'X1', names: ['AX'] },
      { title: 'Y1', names: ['AY'] },
      { title: 'Y2', names: ['BY'] },
    ],
    answer: {
      A: 'Z',
      B1: 'N',
      B2: 'N',
      C: 'Z',
      AX: 'Z',
      AY: 'P',
      BY: 'N',
    },
  },
  {
    id: 'e5',
    image: Q5,
    inputs: [
      { title: '1 - 2', names: ['A', 'B1'] },
      { title: '2 - 3', names: ['B2', 'C'] },
      { title: 'X1', names: ['AX'] },
      { title: 'Y1', names: ['AY'] },
      { title: 'M1', names: ['AM'] },
      { title: 'Y3', names: ['CY'] },
    ],
    answer: {
      A: 'N',
      B1: 'P',
      B2: 'P',
      C: 'Z',
      AX: 'Z',
      AY: 'N',
      AM: 'N',
      CY: 'N',
    },
  },
];

export default easy;

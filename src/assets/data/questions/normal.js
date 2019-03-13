import {
  Q1, Q2, Q3, Q4, Q5,
} from '../../svg/normal';

const normal = [
  {
    id: 'n1',
    image: Q1,
    inputs: [
      { title: '1 - 2', names: ['A', 'B1'] },
      { title: '2 - 3', names: ['B2', 'C1'] },
      { title: '3 - 4', names: ['C2', 'D1'] },
      { title: '4 - 5', names: ['D2', 'E'] },
      { title: 'X1', names: ['AX'] },
      { title: 'Y1', names: ['AY'] },
      { title: 'Y3', names: ['CY'] },
      { title: 'Y4', names: ['DY'] },
    ],
    answer: {
      A: 'Z',
      B1: 'P',
      B2: 'P',
      C1: 'N',
      C2: 'N',
      D1: 'Z',
      D2: 'Z',
      E: 'Z',
      AX: 'Z',
      AY: 'N',
      CY: 'N',
      DY: 'P',
    },
  },
  {
    id: 'n2',
    image: Q2,
    inputs: [
      { title: '1 - 2', names: ['A', 'B1'] },
      { title: '2 - 3', names: ['B2', 'C'] },
      { title: 'X1', names: ['AX'] },
      { title: 'Y1', names: ['AY'] },
      { title: 'M1', names: ['AM'] },
      { title: 'Y2', names: ['BY'] },
    ],
    answer: {
      A: 'P',
      B1: 'N',
      B2: 'N',
      C: 'Z',
      AX: 'Z',
      AY: 'P',
      AM: 'P',
      BY: 'N',
    },
  },
  {
    id: 'n3',
    image: Q3,
    inputs: [
      { title: '1 - 2', names: ['A', 'B1'] },
      { title: '2 - 3', names: ['B2', 'C'] },
      { title: 'X1', names: ['AX'] },
      { title: 'Y1', names: ['AY'] },
      { title: 'M1', names: ['AM'] },
      { title: 'X3', names: ['CX'] },
      { title: 'Y3', names: ['CY'] },
      { title: 'M3', names: ['CM'] },
    ],
    answer: {
      A: 'N',
      B1: 'P',
      B2: 'P',
      C: 'N',
      AX: 'Z',
      AY: 'N',
      AM: 'N',
      CX: 'Z',
      CY: 'N',
      CM: 'P',
    },
  },
  {
    id: 'n4',
    image: Q4,
    inputs: [
      { title: '1 - 2', names: ['A', 'B1'] },
      { title: '2 - 3', names: ['B2', 'C1'] },
      { title: '3 - 4', names: ['C2', 'D'] },
      { title: 'X1', names: ['AX'] },
      { title: 'Y1', names: ['AY'] },
      { title: 'M1', names: ['AM'] },
      { title: 'Y4', names: ['DY'] },
    ],
    answer: {
      A: 'N',
      B1: 'Z',
      B2: 'Z',
      C1: 'P',
      C2: 'P',
      D: 'Z',
      AX: 'Z',
      AY: 'N',
      AM: 'N',
      DY: 'N',
    },
  },
  {
    id: 'n5',
    image: Q5,
    inputs: [
      { title: '1 - 2', names: ['A', 'B1'] },
      { title: '2 - 3', names: ['B2', 'C1'] },
      { title: '3 - 4', names: ['C2', 'D1'] },
      { title: '4 - 5', names: ['D2', 'E'] },
      { title: 'X1', names: ['AX'] },
      { title: 'Y1', names: ['AY'] },
      { title: 'Y2', names: ['BY'] },
      { title: 'Y5', names: ['EY'] },
    ],
    answer: {
      A: 'Z',
      B1: 'N',
      B2: 'N',
      C1: 'Z',
      C2: 'Z',
      D1: 'P',
      D2: 'P',
      E: 'Z',
      AX: 'Z',
      AY: 'P',
      BY: 'N',
      EY: 'N',
    },
  },
];

export default normal;

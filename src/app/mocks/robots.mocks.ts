// After creating class - set type to be class 'Robot'
// export const ROBOTS: Robot[] = {...}
export const ROBOTS = [
  {
    id: 1,
    age: 15,
    name: 'Dave',
    parts: [{
      partId: 101,
      condition: 35
    }],
    type: 'droid'
  },
  {
    id: 2,
    age: 16,
    name: 'Dave2',
    parts: [{
      partId: 104,
      condition: 90
    }, {
      partId: 101,
      condition: 90
    }],
    type: 'android'
  },
  {
    id: 3,
    age: 17,
    name: 'Dave3',
    parts: [{
      partId: 102,
      condition: 23
    }
    ],
    type: 'droid'
  },
  {
    id: 4,
    age: 18,
    name: 'Dave4',
    parts: [
      {
        partId: 103,
        condition: 99
      },
      {
        partId: 102,
        condition: 76
      },
      {
        partId: 105,
        condition: 87
      }],
    type: 'droid'
  }
];


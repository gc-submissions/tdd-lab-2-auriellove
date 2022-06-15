const {calculateChange, isSufficientPayment, calculateTotal, addItem, removeItem} = require('../src/js/cart-functions.js');



describe("calculateChange", () => {
  test("When payment is 13.03 and total is 6 then change will be 12.3", () => {
    //Arrange
    const total = 12.3;
    const payment = 13.03;

    //Act
    const change = calculateChange(payment, total);

    //Assert
    expect(change).toBeCloseTo(0.73);
  })
});
describe("calculateChange", () => {
  test("When payment is 25 and total is 20 then change will be 5", () => {
    //Arrange
    const total = 20;
    const payment = 25;

    //Act
    const change = calculateChange(payment, total);

    //Assert
    expect(change).toBe(5);
  })
});

describe("isSufficientPayment", () => {
  test("When payment is 5 and total is 6 expect isSufficientPayment to return true", () => {

    const total = 5;
    const payment = 25;

    const isSufficient = isSufficientPayment(payment, total);

    expect(isSufficient).toBe(true);
  })
});

describe("calculateTotal", () => {
  test("Calculates the total with one item", () => {
    //Arrange
    const items = [{name: "Ball", price: 4.99}];

    //Act
    const total = calculateTotal(items);

    //Assert
    expect(total).toEqual(4.99);
  }) 
});
describe("calculateTotal", () => {
  test("Calculates the total with three items", () => {
    //Arrange
    const items = [
      {name: "Ball", price: 3.0},
      {name: "Ball", price: 12.0},
      {name: "Ball", price: 10.0},
    ];

    //Act
    const total = calculateTotal(items);

    //Assert
    expect(total).toEqual(25);
  }) 
});

  
describe("calculateTotal", () => {
  test("Calculates the total and expect it to be 0", () => {
    //Arrange
    const items = [];

    //Act
    const total = calculateTotal(items);

    //Assert
    expect(total).toBe(0);
  }) 
});

describe("calculateTotal", () => {
  test("Calculates the total with four items", () => {
    //Arrange
    const items = [
      {name: "Ball", price: 10},
      {name: "Ball", price: 12},
      {name: "Ball", price:20},
      {name: "Ball", price: 10 },
    ];

    //Act
    const total = calculateTotal(items);

    //Assert
    expect(total).toBe(52);
  }) 
});

describe("addItem", () => {
  test("add 1 item into empty array", () => {

    let itemsArray = [] 

    addItem(itemsArray, "beans", 3);

    expect(itemsArray).toContainEqual({name: "beans", price: 3});



  })
});

describe("addItem", () => {
  test("add 1 item into an established array", () => {

    let itemsArray = [{name: "beans", price: 3}];

    addItem(itemsArray, "sugar", 2);

    expect(itemsArray).toContainEqual( {name: "beans", price: 3} , {name: "sugar", price: 2} );



  })
});

describe("addItem", () => {
  test("testing with 3 items in array", () => {

    let itemsArray = [{name: "beans", price: 3}, {name: "sugar", price: 2} , {name: "milk", price: 1}];

    addItem(itemsArray, "cake", 5);

    expect(itemsArray).toContainEqual( {name: "beans", price: 3} , {name: "sugar", price: 2} , {name: "milk", price: 1}, {name: "cake", price: 5} );



  })
});

describe("removeItem", () => {
  test("remove the first item from array", () => {
    let itemsArray = [
    {name: "beans", price: 3}, 
    {name: "sugar", price: 2} , 
    {name: "milk", price: 1}
  ];

  removeItem(itemsArray, 0);

  expect(itemsArray).not.toContainEqual({name: "beans", price: 3});
  });
});

describe("removeItem", () => {
  test("remove the last item from array", () => {
    let itemsArray = [
    {name: "beans", price: 3}, 
    {name: "sugar", price: 2} , 
    {name: "milk", price: 1}
  ];

  removeItem(itemsArray, 2);

  expect(itemsArray).not.toContainEqual({name: "milk", price: 1});
  });
});

describe("removeItem", () => {
  test("remove the middle item from array", () => {
    let itemsArray = [
    {name: "beans", price: 3}, 
    {name: "sugar", price: 2} , 
    {name: "milk", price: 1}
  ];

  removeItem(itemsArray, 1);

  expect(itemsArray).not.toContainEqual({name: "sugar", price: 2});
  });
});
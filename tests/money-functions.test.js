const {formatCurrency, getCoins} = require ('../src/js/money-functions.js')

describe("formatCurrency", () => {
  test("return 0 starting with the amount 0", () => {
    //Arrange
    let amount = 0;

    const returnsAmount = formatCurrency(amount);
    // const results = Math.cell(amount * 100) / 100;



    expect(returnsAmount).toEqual(`$${"0.00"}`);
  });
});

describe("formatCurrency", () => {
  test("return -1 starting with the amount -1", () => {
    //Arrange
    let amount = -1;

    const returnsAmount = formatCurrency(amount);
    // const results = Math.cell(amount * 100) / 100;



    expect(returnsAmount).toEqual(`$${"-1.00"}`);
  });
});

describe("formatCurrency", () => {
  test("return 1 starting with the amount 1", () => {
    //Arrange
    let amount = 1;

    const returnsAmount = formatCurrency(amount);
    // const results = Math.cell(amount * 100) / 100;



    expect(returnsAmount).toEqual(`$${"1.00"}`);
  });
});

describe("formatCurrency", () => {
  test("return 1.50 starting with the amount 1.50", () => {
    //Arrange
    let amount = 1.50;

    const returnsAmount = formatCurrency(amount);
    // const results = Math.cell(amount * 100) / 100;



    expect(returnsAmount).toEqual(`$${"1.50"}`);
  });
});

describe("formatCurrency", () => {
  test("return 0.01 starting with the amount 0.01", () => {
    //Arrange
    let amount = 0.01;

    const returnsAmount = formatCurrency(amount);
    // const results = Math.cell(amount * 100) / 100;



    expect(returnsAmount).toEqual(`$${"0.01"}`);
  });
});

describe("formatCurrency", () => {
  test("return 527.68 starting with the amount 527.6789", () => {
    //Arrange
    let amount = 527.6789;

    const returnsAmount = formatCurrency(amount);
    // const results = Math.cell(amount * 100) / 100;



    expect(returnsAmount).toEqual(`$${"527.68"}`);
  });
});

describe("getCoins", () => {
  test("", () => {
    let cents = 32;
    const countCents = getCoins(cents);
    expect(countCents).toEqual({
      quarters: 1,
      dimes: 0,
      nickles: 1,
      pennies: 2,
    });
  });
});

describe("getCoins", () => {
  test("", () => {
    let cents = 10;
    const countCents = getCoins(cents);
    expect(countCents).toEqual({
      quarters: 0,
      dimes: 1,
      nickles: 0,
      pennies: 0,
    });
  });
});

describe("getCoins", () => {
  test("", () => {
    let cents = 27;
    const countCents = getCoins(cents);
    expect(countCents).toEqual({
      quarters: 1,
      dimes: 0,
      nickles: 0,
      pennies: 2,
    });
  });
});

describe("getCoins", () => {
  test("", () => {
    let cents = 68;
    const countCents = getCoins(cents);
    expect(countCents).toEqual({
      quarters: 2,
      dimes: 1,
      nickles: 1,
      pennies: 3,
    });
  });
});
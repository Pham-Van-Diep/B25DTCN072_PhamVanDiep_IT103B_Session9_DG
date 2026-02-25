let orders = [
  "Đơn hàng A",
  "Đơn hàng B",
  "Đơn hàng C",
  "Đơn hàng D",
  "Đơn hàng E",
];

let revenues = [1500, 2800, 1200, -500, 3200];

const money = () => {
  const money_1 = revenues.some((revenues) => revenues > 0);
  console.log(`Có đơn hàng âm: - index.js:13`, money_1);

  const money_2 = revenues.every((revenues) => revenues > 500);
  console.log(`Tất cả trên 500: - index.js:16`, money_2);
};

money();

const netProfits = () => {
  const profit = revenues.map((num) => {
    return num * 0.9;
  });
  console.log(profit);
};

netProfits();


const currencyFormatter = (value) => {
  // cell adalah data dari kolom dari baris yang aktif
  // row adalah baris keseluruhan data
  var formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  // return formatter.format(row.price);
  return formatter.format(value);
}

module.exports = {
  currencyFormatter
}
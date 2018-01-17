r.table(table)
.filter({code})
.run()
.then(response => {
  if(response && response.length){
    return res.json({
      isValidCode: true,
      voucherAmount: response[0].amount
    })
  }
  return res.json({ isValidCode: false})
})
.error(err => res.json({ isValidCode: false}));

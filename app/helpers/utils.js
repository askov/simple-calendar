export const getDateRangeInMonth = date => {
  let dates = [];
  const firstDayCurr = firstDayInCurrMonth(date);
  const startDate = new Date(
    firstDayCurr.getFullYear(),
    firstDayCurr.getMonth(),
    // sunday has 0 index in getDay(), so we switch 0 to 7
    firstDayCurr.getDate() - (date.getDay() || 7) + 1
  );
  // 41 magic number is from grid size 6 x 7 - 1
  const stopDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate() + 41
  );
  
  let tmpDate = startDate;
  while (startDate <= stopDate) {
    dates.push(new Date(tmpDate));
    tmpDate.setDate(tmpDate.getDate() + 1);
  }

  return dates;
}

const firstDayInCurrMonth = date => {
    return new Date(date.getFullYear(), date.getMonth(), 1);
}

export const firstDayInPrevMonth = date => {
  return new Date(date.getFullYear(), date.getMonth() - 1, 1);
}

export const firstDayInNextMonth = date => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 1);
}

export const compareDatesWithoutTime = (date1, date2) => {
    let dateTmp1 = new Date(date1);
    let dateTmp2 = new Date(date2);
    dateTmp1.setHours(0, 0, 0, 0);
    dateTmp2.setHours(0, 0, 0, 0);
    return dateTmp1.getTime() === dateTmp2.getTime();
}
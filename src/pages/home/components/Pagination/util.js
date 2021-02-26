export const buttonStyle = {
  inactive: {
    textDecoration: "none",
  },
  active: {
    textDecoration: "none",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
};

const getButtonStyle = (current) =>
  current ? buttonStyle.active : buttonStyle.inactive;

const disabledButtonInfo = {
  style: buttonStyle.inactive,
  content: "...",
  page: -1,
};

export const extractButtonInfo = (pageNum, totalPages) => {
  const buttons = [];

  const getButtonInfo = (i) => ({
    style: getButtonStyle(pageNum === i),
    content: i,
    page: i,
  });

  // only one page
  if (totalPages <= 1) {
    return buttons;
  }

  // add first button
  buttons.push(getButtonInfo(1));

  // when there is up to 5 pages - (1,2,3,4)
  if (totalPages < 5) {
    for (let i = 2; i <= totalPages; i++) {
      buttons.push(getButtonInfo(i));
    }
    return buttons;
  }

  // more than 5 pages
  if (pageNum < 5) {
    // first 5 pages - (1,2,3,4,5 ... lastpage)
    for (let i = 2; i <= 5; i++) {
      buttons.push(getButtonInfo(i));
    }
    buttons.push(disabledButtonInfo);
    buttons.push(getButtonInfo(totalPages));
  } else if (pageNum + 2 >= totalPages) {
    // e.g. 3 page - (1 ... 2,3,4 ... lastpage)
    buttons.push(disabledButtonInfo);
    for (let i = totalPages - 3; i <= totalPages; i++) {
      buttons.push(getButtonInfo(i));
    }
  } else {
    // last 5 pages
    buttons.push(disabledButtonInfo);
    for (let i = pageNum - 1; i <= pageNum + 1; i++) {
      buttons.push(getButtonInfo(i));
    }
    buttons.push(disabledButtonInfo);
    buttons.push(getButtonInfo(totalPages));
  }

  return buttons;
};

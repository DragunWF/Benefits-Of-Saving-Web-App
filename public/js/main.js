$(document).ready(() => {
  const icons = $(".icons");
  let timesIconClicked = 0;

  function convertToOrdinal(number) {
    const charArray = number.toString().split("");
    const lastNumber = charArray[charArray.length - 1];
    let ordinal;

    switch (lastNumber) {
      case "1":
        ordinal = "st";
        break;
      case "2":
        ordinal = "nd";
        break;
      case "3":
        ordinal = "rd";
        break;
      default:
        ordinal = "th";
        break;
    }

    return `${number}${ordinal}`;
  }

  icons.click(() => {
    timesIconClicked++;
    const formattedCount = convertToOrdinal(timesIconClicked);
    alert(`This is the ${formattedCount} time you clicked an icon.`);
  });
});

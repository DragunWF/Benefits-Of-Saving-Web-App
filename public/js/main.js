$(document).ready(() => {
  const icons = $(".icons");
  let timesIconClicked = 0;

  function convertToOrdinal(number) {
    const numberString = number.toString();
    const lastNumber = Number(numberString.charAt(numberString.length - 1));

    switch (lastNumber) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      default:
        break;
    }
  }

  icons.clicked(() => {
    timesIconClicked++;
    const timesWord = timesIconClicked > 1 ? "time" : "times";
    const formattedCount = convertToOrdinal(timesIconClicked);
    alert(`This is the ${formattedCount} ${timesWord}`);
  });
});

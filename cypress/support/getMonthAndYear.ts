const getCurrentMonthYear = () => {
    // Get the current date
    const currentDate = new Date();

    // Get the current month (zero-based index)
    const currentMonth = currentDate.getMonth();

    // Define an array of month names
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Get the three-letter abbreviation of the current month
    const currentMonthAbbreviation = monthNames[currentMonth];

    // Get the current year
    const currentYear = currentDate.getFullYear();

    // Format the current month and year
    const formattedMonthYear = `${currentMonthAbbreviation} ${currentYear}`;

    return formattedMonthYear;
}

export default getCurrentMonthYear()
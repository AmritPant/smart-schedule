function generateSlot(availableDays, availablePeriods) {
  // Input validation
  if (!Array.isArray(availableDays) || !Array.isArray(availablePeriods)) {
    throw new Error("Both availableDays and availablePeriods must be arrays");
  }

  // Validate days
  const validDays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "everyday",
  ];
  const lowerCaseDays = availableDays.map((day) => day.toLowerCase());
  if (!lowerCaseDays.every((day) => validDays.includes(day))) {
    throw new Error("Invalid day found in availableDays");
  }

  // Filter out saturday and handle 'everyday'
  let daysToProcess = lowerCaseDays.filter((day) => day !== "saturday");
  if (daysToProcess.includes("everyday")) {
    daysToProcess = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
    ];
  }

  // Validate periods (mp1, ep3, np2, ap3, etc., max period 4)
  const validPrefixes = ["m", "e", "n", "a"];
  const periodRegex = /^[mena]p[1-4]$/;
  if (!availablePeriods.every((period) => periodRegex.test(period))) {
    throw new Error(
      "Invalid period format. Use mp1, ep1, np1, ap1, etc., with periods 1-4"
    );
  }

  // Generate slots for the year 2025
  const slots = [];
  const startDate = new Date("2025-01-01");
  const endDate = new Date("2025-12-31");

  for (
    let date = new Date(startDate);
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    const dayName = date
      .toLocaleString("en-US", { weekday: "long" })
      .toLowerCase();

    // Skip if day is not in daysToProcess
    if (dayName === "saturday" || !daysToProcess.includes(dayName)) {
      continue;
    }

    // Generate slots for each period on this day
    for (const period of availablePeriods) {
      const formattedDate = date.toISOString().split("T")[0]; // YYYY-MM-DD
      const slotId = `${formattedDate}__${period}`;

      slots.push({
        slotId,
        date: formattedDate,
        period,
        bookedBy: null,
        available: true,
      });
    }
  }

  return slots;
}

module.exports = generateSlot();

function IsOpen() {
  const daysOfWeek: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today: number = new Date().getDay();
  const currentTime: number = new Date().getHours();

  // Opening hours for the store
  const openingHours: { [key: string]: { open: number; close: number } } = {
    Monday: { open: 8, close: 17 },
    Tuesday: { open: 8, close: 17 },
    Wednesday: { open: 8, close: 17 },
    Thursday: { open: 8, close: 17 },
    Friday: { open: 8, close: 16 },
    Saturday: { open: 0, close: 0 },
    Sunday: { open: 0, close: 0 },
  };

  // Get today's opening hours
  const todayOpeningHours = openingHours[daysOfWeek[today]];

  // Check if the store is open
  const isOpenToday: boolean =
    currentTime >= todayOpeningHours.open &&
    currentTime < todayOpeningHours.close;

  return isOpenToday ? (
    <p className="mb-2 font-normal">
      Máme <strong className="text-gradient uppercase">otevřeno</strong>, tešíme
      se na vaši navštěvu.
    </p>
  ) : (
    <p className="mb-2 font-normal">
      Máme <strong className="uppercase text-pink">zavřeno</strong>. Navštivte
      nás v otevíracích hodinách:
    </p>
  );
}

export default IsOpen;

import GoodMorningAnimation from '../assets/animations/Good morning.json';
import GoodAfternoonAnimation from '../assets/animations/Good afternoon.json';
import GoodEveningAnimation from '../assets/animations/Good evening.json';
import NightyAnimation from '../assets/animations/Nighty.json';

export const getGreetingAnimation = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return GoodMorningAnimation;
    } else if (currentHour >= 12 && currentHour < 18) {
      return GoodAfternoonAnimation;
    } else if (currentHour >= 18 && currentHour < 22) {
      return GoodEveningAnimation;
    } else {
      return NightyAnimation;
    }
  };
  
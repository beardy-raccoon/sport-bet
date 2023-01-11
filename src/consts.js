import fcbLogo from './images/FCB.png';
import athleticoLogo from './images/athletico.png';
import angeLogo from './images/ange.png';
import charltonLogo from './images/charlton.png';
import arsenalLogo from './images/arsenal.png';
import chelsiLogo from './images/chelsi.png';
import manchesterCityLogo from './images/manchester-city.png';
import manchesterUnitedLogo from './images/manchester-united.png';
import oxfordLogo from './images/oxford.png';
import realMadridLogo from './images/real-madrid.png';
import southgamptonLogo from './images/southgampton.png';
import valenciaLogo from './images/valencia.png';

export const events = [
  {
    date: '17 января 2023',
    time: '11-00',
    firstTeam: { name: 'Атлетико', logo: athleticoLogo, },
    secondTeam: { name: 'Барселона', logo: fcbLogo, },
    bet: { firstTeam: 'Атлетико x 2.5', draw: 'Ничья x 1.5', secondTeam: 'Барселона x 3.1' },
    id: '1',
  },

  {
    date: '17 января 2023',
    time: '13-00',
    firstTeam: { name: 'Анже', logo: angeLogo, },
    secondTeam: { name: 'ПСЖ', logo: valenciaLogo, },
    bet: { firstTeam: 'Анже x 4.5', draw: 'Ничья x 1.9', secondTeam: 'ПСЖ x 3.4' },
    id: '2',
  },

  {
    date: '17 января 2023',
    time: '15-00',
    firstTeam: { name: 'Арсенал', logo: arsenalLogo, },
    secondTeam: { name: 'Чарольтон Атлетик', logo: charltonLogo, },
    bet: { firstTeam: 'Арсенал x 2.8', draw: 'Ничья x 1.6', secondTeam: 'Чарольтон Атлетик x 4.4' },
    id: '3',
  },

  {
    date: '17 января 2023',
    time: '18-00',
    firstTeam: { name: 'Челси', logo: chelsiLogo, },
    secondTeam: { name: 'Манчестер Сити', logo: manchesterCityLogo, },
    bet: { firstTeam: 'Челси x 2.2', draw: 'Ничья x 1.3', secondTeam: 'Манчестер Сити x 3.3' },
    id: '4',
  },

  {
    date: '19 января 2023',
    time: '11-00',
    firstTeam: { name: 'Манчестер Юнайтед', logo: manchesterUnitedLogo, },
    secondTeam: { name: 'Оксфорд Юнайтед', logo: oxfordLogo, },
    bet: { firstTeam: 'Манчестер Юнайтед x 2.7', draw: 'Ничья x 1.1', secondTeam: 'Оксфорд Юнайтед x 3.9' },
    id: '5',
  },

  {
    date: '20 января 2023',
    time: '19-00',
    firstTeam: { name: 'Реал Мадрид', logo: realMadridLogo, },
    secondTeam: { name: 'Валенсия', logo: valenciaLogo, },
    bet: { firstTeam: 'Реал Мадрид x 3.2', draw: 'Ничья x 2.5', secondTeam: 'Валенсия x 4.1' },
    id: '6',
  },

  {
    date: '22 января 2023',
    time: '22-00',
    firstTeam: { name: 'Саутгемптон', logo: southgamptonLogo, },
    secondTeam: { name: 'Манчестер Сити', logo: manchesterCityLogo, },
    bet: { firstTeam: 'Саутгемптон x 3.8', draw: 'Ничья x 1.7', secondTeam: 'Манчестер Сити x 2.1' },
    id: '7',
  },
];
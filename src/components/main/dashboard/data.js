import top1 from '../../../img/dashboard/top1.png';
import top2 from '../../../img/dashboard/top2.png';
import top3 from '../../../img/dashboard/top3.png';
import top4 from '../../../img/dashboard/top4.png';
// import middleLeftIcon from '../../../img/dashboard/middle1.png';
import middleMiddleIcon2 from '../../../img/dashboard/middle2.png';
import middleMiddleIcon3 from '../../../img/dashboard/middle3.png';
import employeesIcon from '../../../img/dashboard/user.png';

// top列表数据
export const topData = [
  {
    id: 1,
    title: 'Total Employees',
    num: 2.3016,
    name: 'Task',
    percent: '+35%',
    time: 'This Month',
    icon: top1,
  },
  {
    id: 2,
    title: 'Total Tasks',
    num: 2.3016,
    name: 'Task',
    percent: '+35%',
    time: 'This Month',
    icon: top2,
  },
  {
    id: 3,
    title: 'Complated Task',
    num: 2.3016,
    name: 'Task',
    percent: '+35%',
    time: 'This Month',
    icon: top3,
  },
  {
    id: 4,
    title: 'Imcompleted Task',
    num: 2.3016,
    name: 'Task',
    percent: '+35%',
    time: 'This Month',
    icon: top4,
  },
];

// top右侧数据
export const topRightData = {
  title: 'Task Target Actual vs Prediction',
  // TODO:数据判断加 ,
  num: 10468,
  name: 'Tasks',
};

// middle的left数据
export const middleLeftData = {
  title: 'Complete Task Target',
  num: 82,
  name: 'Task',
  bottomTitle: 'Completed Task',
  botomName: 'Global',
  count: 455,
};

// middle的middle数据
export const middleMiddleData = {
  title: 'Task Count',
  bottom: [
    {
      id: 1,
      bottomTitle: 'Expanslon Europo',
      botomName: 'Global',
      count: 245,
      icon: middleMiddleIcon2,
    },
    {
      id: 2,
      bottomTitle: 'Payment Promo',
      botomName: 'Commercial',
      count: 122,
      icon: middleMiddleIcon3,
    },
  ],
};

// middle的right数据
export const middleRightData = {
  title: 'Top Employees',
  employees: [
    {
      id: 1,
      icon: employeesIcon,
      name: 'Rudolph G',
      job: 'Product Designer',
      tasks: 194,
      pts: 1.23,
    },
    {
      id: 2,
      icon: employeesIcon,
      name: 'Anna F',
      job: 'Fronted Engnieer',
      tasks: 194,
      pts: 1.23,
    },
    {
      id: 3,
      icon: employeesIcon,
      name: 'Mayco D.G',
      job: 'Social Media',
      tasks: 194,
      pts: 1.23,
    },
    {
      id: 4,
      icon: employeesIcon,
      name: 'Robert X',
      job: 'Growth',
      tasks: 194,
      pts: 1.23,
    },
    {
      id: 5,
      icon: employeesIcon,
      name: 'Robert Y',
      job: 'Growth',
      tasks: 194,
      pts: 1.23,
    },
  ],
};

// bottom数据
export const bottomData = [
  {
    id: 1,
    title: 'Tachnology & Design Team',
    num: 940,
    name: 'Employees',
    color: '#6C5DD3',
  },
  {
    id: 2,
    title: 'Business & Marketing Team',
    num: 194,
    name: 'Employees',
    color: '#F14A5B',
  },
  {
    id: 3,
    title: 'Customer Operation Team',
    num: 712,
    name: 'Employees',
    color: '#F14A5B',
  },
];

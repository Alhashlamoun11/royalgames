// type
type IMenuDataType = {
  id: number;
  title: string;
  link: string;
  sub_menu?: {
      title: string;
      link: string;
  }[];
}

const menu_data:IMenuDataType[] = [
  {
    id:1,
    title:'الرئيسية',
    link:'/'
  },
  {
    id:2,
    title:'المنافسات',
    link:'/tournament',
  },
  {
    id:3,
    title:'اللاعبين',
    link:'/players',
  },
  {
    id:5,
    title:'الفرق',
    link:'/clans'
  },
  {
    id:5,
    title:'قائمة الحرمان',
    link:'/black-list'
  },  
  {
    id:7,
    title:'أخرى',
    link:'#',
    sub_menu:[
      {title:'من نحن',link:'/about'},
      {title:'صناع المحتوى',link:'/streamers'},
      {title:'برنامج الحماية',link:'/application'},
      {title:'الشروحات',link:'/tutorials'}
    ]

  }
]

export default menu_data;